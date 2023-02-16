import { useSelector, useDispatch } from 'react-redux';
import { createTaskWithServer, setCreateTaskForm, setErrorMessage } from '../../features/tasksSlice';
import { v4 as uuidv4 } from 'uuid';
import {useState} from 'react'


function CreateTaskForm() {
  
  const dispatch = useDispatch();
  const createTaskForm = useSelector((state) => state.tasks.createTaskForm);
  const errorMessage = useSelector((state) => state.tasks.errorMessage);

  const handleTaskFormChange = (event) => {
    const { name, value } = event.target;
    dispatch(setCreateTaskForm({ [name]: value }));
    dispatch(setErrorMessage(''));
  }

  const resetForm = () => {
    dispatch(setCreateTaskForm({ description: '', date: '' }));
  };

  const handleCreateSubmit = async (event) => {
    event.preventDefault();
    const taskData = {
      // id: uuidv4(),
      description: event.target.elements.description.value,
      date: event.target.elements.date.value
    };
    if (!taskData.description || !taskData.date) {
      dispatch(setErrorMessage('Both description and date are required fields'));
      return;
    }
  
    try {
      dispatch(createTaskWithServer(taskData));
      resetForm();
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
        value={createTaskForm.description}
        onChange={handleTaskFormChange}
      />
      </div>
      <div className="mb-3">
      <label className="block text-gray-700 font-medium mb-2">Date:</label>
      <input
        className="w-full border border-gray-400 p-2"
        type="date"
        name="date"
        value={createTaskForm.date}
        onChange={handleTaskFormChange}
      />
     </div>
      {errorMessage && 
        <div className="text-red-500 font-medium mb-3">
          {errorMessage}
        </div>
      }
      <button type="submit" className="bg-blue-500 hover:bg-blue-400 text-white font-medium py-2 px-4 rounded">Create</button>
    </form>
  );
}


export default CreateTaskForm 