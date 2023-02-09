import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setShowGoalTaskInputs } from '../../features/goalsSlice';
import CreateTaskForm from '../Task/CreateTaskForm';

const AddTaskToGoal = ({ goal_id }) => {
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    setShowForm(!showForm);
  };
  return (
    <>
      <button onClick={handleAddTask}>AddTaskToGoal</button>
      {showForm && <CreateTaskForm goal_id={goal_id} closeForm={() => setShowForm(false)} />}
    </>
  );
};

export default AddTaskToGoal;
