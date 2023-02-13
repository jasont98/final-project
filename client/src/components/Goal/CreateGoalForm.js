import { useSelector, useDispatch } from 'react-redux';
import { createGoalWithServer, setCreateGoalForm } from '../../features/goalsSlice';
import { v4 as uuidv4 } from 'uuid';

function CreateGoalForm() {
  
  const dispatch = useDispatch();
  const createGoalForm = useSelector((state) => state.goals.createGoalForm);

  const handleGoalFormChange = (event) => {
    const { name, value } = event.target.value;
    dispatch(setCreateGoalForm({ [name]: value }));
  }

  const handleCreateSubmit = async (event) => {
    // console.log(event.value)
    event.preventDefault();
    const goalData = {
      id: uuidv4(),
      description: event.target.elements.description.value,
      date: event.target.elements.date.value
    };
    try {
      dispatch(createGoalWithServer(goalData));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleCreateSubmit} className="p-5 bg-gray-200">
      <div className="mb-3">
      <label className="block text-gray-700 font-medium mb-2">Description:</label>
      <input
        className="w-full border border-gray-400 p-2"
        type="text"
        name="description"
        value={createGoalForm.description}
        onChange={handleGoalFormChange}
      />
      </div>
      <div className="mb-3">
      <label className="block text-gray-700 font-medium mb-2">Date:</label>
      <input
        className="w-full border border-gray-400 p-2"
        type="date"
        name="date"
        value={createGoalForm.date}
        onChange={handleGoalFormChange}
      />
      </div>
      <button className="bg-blue-500 hover:bg-blue-400 text-white font-medium py-2 px-4 rounded">Create</button>
    </form>
  );
}


export default CreateGoalForm 
