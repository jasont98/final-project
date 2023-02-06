import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteGoalWithServer } from '../../features/goalsSlice'

const DeleteGoal = ({id}) => {

    const dispatch = useDispatch();

    const handleDeleteGoal = (id) => {
        dispatch(deleteGoalWithServer(id));
      };



  return (
    <button onClick={() => handleDeleteGoal(id)}>Delete</button>
  );
};

export default DeleteGoal;
