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
      <button
       class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-3 mt-3  dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
       onClick={() => handleEditClick(event)}>Edit
      </button>
            {showInputs && editingEvent.id === event.id && (
              <>
    <form onSubmit={handleEditSubmit}>
      <label>Description: </label>
      <input
        type="text"
        name="title"
        value={editEventForm?.title || ""}
        onChange={handleEditEventFormChange}
      />
      <br></br>
      <button type="submit"
      class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-3 mt-3  dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
      >
        Save</button>
    </form>
    </>)}
    </div>
  );
}
 export default EditEventForm
