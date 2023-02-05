import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GoalForm from './GoalForm';
import {
  deleteGoalWithServer,
  updateGoalWithServer,
  createGoalWithServer,
  fetchGoals,
  setGoalForm,
  setShowInputs,
  setEditingGoal,
} from '../../features/goalsSlice';

function Goal() {
  
  const dispatch = useDispatch();
  const goals = useSelector((state) => state.goals.goals);
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

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    dispatch(updateGoalWithServer(goalForm));
    dispatch(setEditingGoal(null));
    dispatch(setGoalForm({
      description: '',
      date: '',
      tasks: '',
      completed: false
    }));
    dispatch(fetchGoals());
  };
  
  const handleCreateSubmit = (e) => {
    e.preventDefault();
    dispatch(createGoalWithServer(goalForm));
    dispatch(setGoalForm({
      description: '',
      date: '',
      tasks: '',
      completed: false
    }));
    dispatch(fetchGoals());
  };
  

  const handleUpdateGoal = (id, goal) => {
    dispatch(updateGoalWithServer({
      id,
      completed: !goal.completed
    }));
  };

  const handleDeleteGoal = (id) => {
    dispatch(deleteGoalWithServer(id));
  };

  const handleGoalFormChange = (e) => {
    if (editingGoal) {
      dispatch(
        setGoalForm({
          ...goalForm,
          [e.target.name]:
            e.target.type === 'checkbox' ? e.target.checked : e.target.value,
        })
      );
    } else {
      dispatch(
        setGoalForm({
          ...goalForm,
          [e.target.name]: e.target.value,
        })
      );
    }
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
                  setShowInputs(true);
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
                <GoalForm />
                  </>
                  );
                  };
                  export default Goal;

