import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setShowInputs,setEditTaskForm, updateTaskWithServer,  setEditingTask } from '../../features/tasksSlice';

function EditTaskForm({ task }) {
  
  const dispatch = useDispatch();
  const editTaskForm = useSelector((state) => state.tasks.editTaskForm);
  const editingTask = useSelector((state) => state.tasks.editingTask);
  const showInputs = useSelector((state) => state.tasks.showInputs);

  const handleEditClick = (task) => {
    dispatch(setEditingTask(task));
    dispatch(setShowInputs(!showInputs));
  };

  const handleEditTaskFormChange = (task) => {
    const { name, value } = task.target;
    dispatch(setEditTaskForm({
      ...editTaskForm,
      [name]: value
    }));
  };
  
  const handleEditSubmit = (event) => {
    event.preventDefault();
    dispatch(updateTaskWithServer({
      ...editTaskForm,
      id: editingTask.id,
      description: event.target.elements.description.value,
      
    
    }));
  };

  return (
    <div>
      <button  class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-3 mt-3  dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
      onClick={() => handleEditClick(task)}>Edit</button>
        {showInputs && editingTask.id === task.id && (
          <>
    <form onSubmit={handleEditSubmit}>
      <label>Description:</label>
      <input
        type="text"
        name="description"
        value={editTaskForm?.description || ""}
        onChange={handleEditTaskFormChange}
      />
      <br />
      <button type="submit"
        class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-3 mt-3  dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
        >Save</button>
    </form>
    </>)}
    </div>
  );
}
 export default EditTaskForm
