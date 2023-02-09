import { useSelector, useDispatch } from 'react-redux';
import { createTaskWithServer, setCreateTaskForm } from '../../features/tasksSlice';
import { v4 as uuidv4 } from 'uuid';

function CreateTaskForm({goal_id}) {
  
  const dispatch = useDispatch();
  const createTaskForm = useSelector((state) => state.tasks.createTaskForm);

  const handleTaskFormChange = (event) => {
    const { name, value } = event.target.value;
    dispatch(setCreateTaskForm({ [name]: value }));
  }

  const handleCreateSubmit = async (event) => {
    // console.log(event.value)
    event.preventDefault();
    const taskData = {
      goal_id,
      id: uuidv4(),
      description: event.target.elements.description.value,
      date: event.target.elements.date.value
    };
    try {
      dispatch(createTaskWithServer(taskData));
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
        value={createTaskForm.description}
        onChange={handleTaskFormChange}
      />
      <br />
      <label>Date:</label>
      <input
        type="date"
        name="date"
        value={createTaskForm.date}
        onChange={handleTaskFormChange}
      />
      <br />
      <button type="submit">Create</button>
    </form>
  );
}


export default CreateTaskForm 
