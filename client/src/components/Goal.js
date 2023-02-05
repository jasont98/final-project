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

