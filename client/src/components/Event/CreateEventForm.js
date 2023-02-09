import { useSelector, useDispatch } from 'react-redux';
import { createEventWithServer, setCreateEventForm } from '../../features/eventsSlice';
import { v4 as uuidv4 } from 'uuid';

function CreateEventForm() {
  
  const dispatch = useDispatch();
  const createEventForm = useSelector((state) => state.events.createEventForm);

  const handleEventFormChange = (event) => {
    const { name, value } = event.target;
    dispatch(setCreateEventForm({ [name]: value }));
  }

  const handleCreateSubmit = async (event) => {
    // console.log("submitted")
    event.preventDefault();
    const eventData = {
      id: uuidv4(),
      title: event.target.elements.title.value,
      date: event.target.elements.date.value,
     
    };
    try {
      dispatch(createEventWithServer(eventData));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleCreateSubmit}>
      <label>Title:</label>
      <input
        type="text"
        name="title"
        value={createEventForm.title}
        onChange={handleEventFormChange}
      />
      <br />
      <label>Date:</label>
      <input
        type="date"
        name="date"
        value={createEventForm.date}
        onChange={handleEventFormChange}
        pattern="MM/dd/yy"
      />
      <br />
      {/* <label>Goals:</label>
      <input
        type="text"
        name="goals"
        value={createEventForm.goals}
        onChange={handleEventFormChange}
      />
       <label>Tasks:</label>
      <input
        type="text"
        name="tasks"
        value={createEventForm.tasks}
        onChange={handleEventFormChange}
      />
      <br />
      <br /> */}
      <button type="submit">Create</button>
    </form>
  );
}


export default CreateEventForm 
