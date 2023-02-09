import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTaskWithServer } from '../../features/tasksSlice'


const DeleteTask = ({id}) => {

    const dispatch = useDispatch();

    const handleDeleteTask = (id) => {
        dispatch(deleteTaskWithServer(id));
      };



  return (
    <button onClick={() => handleDeleteTask(id)}>Delete</button>
  );
};

export default DeleteTask;