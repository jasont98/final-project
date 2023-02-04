import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateGoalWithServer } from '../goalsSlice';

const EditGoalForm = ({ goalId }) => {
  const goal = useSelector(state => state.goals.goals.find(goal => goal.id === goalId));
  const [updatedGoal, setUpdatedGoal] = useState(goal);
  const dispatch = useDispatch();

  const handleChange = event => {
    setUpdatedGoal({ ...updatedGoal, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(updateGoalWithServer(updatedGoal));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          value={updatedGoal.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          value={updatedGoal.description}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditGoalForm;
