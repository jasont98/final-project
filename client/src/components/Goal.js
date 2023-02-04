// import React from 'react'
// import {useState, useEffect} from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { createGoal } from '../goalsSlice';

// const Goal = () => {
//     const [goals, setGoals] = useState([])
//     const [description, setDescription] = useState('');
//     const [date, setDate] = useState('');
//     const dispatch = useDispatch();
   

//     useEffect(() => {
//       fetch("/goals")
//         .then((r) => r.json())
//         .then((data) => setGoals(data));
//     }, []);

//   const handleDelete = (goalId) => {
//     fetch(`/goals/${goalId}`, {
//       method: 'DELETE',
//     })
//       .then(() => {
//         setGoals(goals.filter((goal) => goal.id !== goalId));
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

  
//   const toggleGoalCompletion = async (goal) => {
//     const updatedGoal = {...goal, completed: !goal.completed};
//     await fetch(`/goals/${goal.id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json"
//     },
//       body: JSON.stringify(updatedGoal)
//     });
//     setGoals(prevGoals => prevGoals.map(prevGoal => prevGoal.id === goal.id ? updatedGoal : prevGoal));
// };

// const handleCreateGoal = async (event) => {
//   event.preventDefault();
//   const goalData = {
//     description: event.target.elements.description.value,
//     date: event.target.elements.date.value
//   };
//   dispatch(createGoal(goalData));
//   try {
//     const response = await fetch("/goals", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(goalData)
//     });
//     const createdGoal = await response.json();
//     setGoals([...goals, createdGoal]);
//   } catch (error) {
//     console.error(error);
//   }
// };

//   const handleChange = (e) => {
//     if (e.target.name === 'description') {
//       setDescription(e.target.value);
//     } else if (e.target.name === 'date') {
//       setDate(e.target.value);
//     }
//   };

// return (
//   <div>
//     {goals.map((goal) => (
//         <ul key={goal.id}>
//         {goal.description}, {goal.date}, completed? {goal.comcompleted}{' '}
// <button onClick={() => toggleGoalCompletion(goal)}>
// {goal.completed ? 'Incomplete' : 'Complete'}
// </button>
// <button onClick={() => handleDelete(goal.id)}>Delete</button>
// </ul>
// ))}
// <form onSubmit={handleCreateGoal}>
// <input
//     type="text"
//     name="description"
//     value={description}
//     onChange={handleChange}
//     placeholder="Goal description"
//   />
// <input
//     type="date"
//     name="date"
//     value={date}
//     onChange={handleChange}
//   />
// <button type="submit">Create Goal</button>

// </form>
//     </div>
//   )
//     }
//     export default Goal

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteGoalWithServer,
  updateGoalWithServer,
  createGoalWithServer,
  fetchGoals,
  setGoalForm,
  setShowInputs,
  setEditingGoal,
} from '../goalsSlice';

function Goal() {
  const goals = useSelector((state) => state.goals.goals);
  const dispatch = useDispatch();
  const goalForm = useSelector((state) => state.goals.goalForm);
  const showInputs = useSelector((state) => state.goals.showInputs);
  const editingGoal = useSelector((state) => state.goals.editingGoal);

  const handleEditClick = (goal) => {
    dispatch(setEditingGoal(goal));
    dispatch(setShowInputs(!showInputs));
  };

  useEffect(() => {
    dispatch(fetchGoals());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingGoal) {
      dispatch(updateGoalWithServer(goalForm));
    } else {
      dispatch(createGoalWithServer(goalForm));
    }
    dispatch(setGoalForm({
      description: '',
      date: '',
      tasks: '',
      completed: false
    }));
    dispatch(setEditingGoal(null));
    dispatch(setShowInputs(false));
    dispatch(fetchGoals());
  };
  

  const handleUpdateGoal = (id, goal) => {
    dispatch(
      setGoalForm({
        ...goal,
        description: goalForm.description,
        date: goalForm.date,
        tasks: goalForm.tasks,
        completed: !goal.completed,
      })
    );
    dispatch(updateGoalWithServer({ id, ...goalForm }));
  };

  const handleDeleteGoal = (id) => {
    dispatch(deleteGoalWithServer(id));
  };

  const handleGoalFormChange = (e) => {
    dispatch(
      setGoalForm({
        ...goalForm,
        [e.target.name]:
          e.target.type === 'checkbox' ? e.target.checked : e.target.value,
      })
    );
  };

  return (
    <>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            {goal.description}
            Date: {goal.date}
            <button onClick={() => handleUpdateGoal(goal.id, goal)}>
              {goal.completed ? 'Incomplete' : 'Complete'}
            </button>
            <button onClick={() => handleEditClick(goal)}>Edit</button>
            {showInputs && editingGoal.id === goal.id && (
              <>
                <input
                  type="text"
                  name="description"
                  value={goalForm.description}
                  onChange={handleGoalFormChange}
                  />
                  <br />
                  <input type="date" name="date" value={goalForm.date} onChange={handleGoalFormChange} />
                  <br />
                  <input type="text" name="tasks" value={goalForm.tasks} onChange={handleGoalFormChange} />
                  <br />
                  <br />
                  <button
                  onClick={() => {
                  dispatch(updateGoalWithServer({ id: goal.id, ...goalForm }));
                  setShowInputs(false);
                  }}
                  >
                  Save
                  </button>
                  </>
                  )}
                  <button onClick={() => handleDeleteGoal(goal.id)}>Delete</button>
                  </li>
                  ))}
                  </ul>
                  <form onSubmit={handleSubmit}>
                  <label>Description:</label>
                  <input
                         type="text"
                         name="description"
                         value={goalForm.description}
                         onChange={handleGoalFormChange}
                       />
                  <br />
                  <label>Date:</label>
                  <input type="date" name="date" value={goalForm.date} onChange={handleGoalFormChange} />
                  <br />
                  <label>Tasks:</label>
                  <input type="text" name="tasks" value={goalForm.tasks} onChange={handleGoalFormChange} />
                  <br />
                  <br />
                  <button type="submit">Create</button>
                  </form>
                  </>
                  );
                  };
                  export default Goal;

