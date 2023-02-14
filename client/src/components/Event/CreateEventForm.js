import { useSelector, useDispatch } from 'react-redux';
import { createEventWithServer, setCreateEventForm, setErrorMessage } from '../../features/eventsSlice';
import { v4 as uuidv4 } from 'uuid';

function CreateEventForm() {
  
  const dispatch = useDispatch();
  const createEventForm = useSelector((state) => state.events.createEventForm);
  const errorMessage = useSelector((state) => state.events.errorMessage);

  const handleEventFormChange = (event) => {
    const { name, value } = event.target;
    dispatch(setCreateEventForm({ [name]: value }));
    dispatch(setErrorMessage(''));
  }

  const handleCreateSubmit = async (event) => {
    event.preventDefault();
    // const eventDate = new Date(event.target.elements.date.value);
    // console.log(eventDate)
    const eventData = {
      // id: uuidv4(),
      title: event.target.elements.title.value,
      date: event.target.elements.date.value
    };
    if (!eventData.title || !eventData.date) {
      dispatch(setErrorMessage('Both title and date are required fields'));
      return;
    }
    try {
      dispatch(createEventWithServer(eventData));
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form onSubmit={handleCreateSubmit} className="p-5 bg-gray-200">
      <div className="mb-3">
        <label className="block text-gray-700 font-medium mb-2">Title:</label>
        <input
          className="w-full border border-gray-400 p-2"
          type="text"
          name="title"
          value={createEventForm.title}
          onChange={handleEventFormChange}
        />
      </div>
      <div className="mb-3">
        <label className="block text-gray-700 font-medium mb-2">Date:</label>
        <input
          className="w-full border border-gray-400 p-2"
          type="date"
          name="date"
          value={createEventForm.date}
          onChange={handleEventFormChange}
      
        />
      </div>
      {errorMessage && 
        <div className="text-red-500 font-medium mb-3">
          {errorMessage}
        </div>
      }
      <button className="bg-blue-500 hover:bg-blue-400 text-white font-medium py-2 px-4 rounded">
        Create
      </button>
    </form>
  );
}


export default CreateEventForm 
