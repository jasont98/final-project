import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setShowInputs,setEditEventForm, updateEventWithServer,  setEditingEvent } from '../../features/eventsSlice';


function EditEventForm({ event }) {
  
  const dispatch = useDispatch();
  const editEventForm = useSelector((state) => state.events.editEventForm);
  const editingEvent = useSelector((state) => state.events.editingEvent);
  const showInputs = useSelector((state) => state.events.showInputs);

  const handleEditClick = (event) => {
    dispatch(setEditingEvent(event));
    dispatch(setShowInputs(!showInputs));
  };

  const handleEditEventFormChange = (event) => {
    const { name, value } = event.target;
    dispatch(setEditEventForm({
      ...editEventForm,
      [name]: value
    }));
  };
  
  const handleEditSubmit = (event) => {
    event.preventDefault();
    dispatch(updateEventWithServer({
      ...editEventForm,
      id: editingEvent.id,
      title: event.target.elements.title.value,   
      
    }));
  };

  return (
    <div>
      <button onClick={() => handleEditClick(event)}>Edit</button>
            {showInputs && editingEvent.id === event.id && (
              <>
    <form onSubmit={handleEditSubmit}>
      <label>Description:</label>
      <input
        type="text"
        name="title"
        value={editEventForm?.title || ""}
        onChange={handleEditEventFormChange}
      />
      <br />
      {/* <label>Date:</label>
      <input
        type="date"
        name="date"
        value={editEventForm?.date || ""}
        onChange={handleEditEventFormChange}
      />
      <br />
      <label>Tasks:</label>
      <input
        type="text"
        name="tasks"
        value={editEventForm?.tasks || ""}
        onChange={handleEditEventFormChange}
      />
      <br />
      <br /> */}
      <button type="submit">Save</button>
    </form>
    </>)}
    </div>
  );
}
 export default EditEventForm
