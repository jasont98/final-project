import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTaskWithServer } from '../../features/goalsSlice';

const CreateGoalTaskForm = ({ goal_id, closeForm }) => {
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createTaskWithServer({ goal_id, description, completed }));
    closeForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <label>
        Completed:
        <input
          type="checkbox"
          checked={completed}
          onChange={(event) => setCompleted(event.target.checked)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateGoalTaskForm;
