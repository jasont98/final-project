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
    <form onSubmit={handleCreateSubmit}>
      <label>Description:</label>
      <input
        type="text"
        name="description"
        value={createGoalForm.description}
        onChange={handleGoalFormChange}
      />
      <br />
      <label>Date:</label>
      <input
        type="date"
        name="date"
        value={createGoalForm.date}
        onChange={handleGoalFormChange}
      />
      <br />
      <label>Tasks:</label>
      <input
        type="text"
        name="tasks"
        value={createGoalForm.tasks}
        onChange={handleGoalFormChange}
      />
      <br />
      <button type="submit">Create</button>
    </form>
  );
}


export default CreateGoalForm 
