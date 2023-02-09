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
      <button onClick={() => handleEditClick(task)}>Edit</button>
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
      <button type="submit">Save</button>
    </form>
    </>)}
    </div>
  );
}
 export default EditTaskForm
