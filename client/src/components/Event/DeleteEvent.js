import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteEventWithServer } from '../../features/eventsSlice'

const DeleteEvent = ({id}) => {

    const dispatch = useDispatch();

    const handleDeleteEvent = (id) => {
        dispatch(deleteEventWithServer(id));
      };



  return (
    <button onClick={() => handleDeleteEvent(id)}>Delete</button>
  );
};

export default DeleteEvent;
