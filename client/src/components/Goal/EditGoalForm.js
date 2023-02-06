import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setShowInputs,setEditGoalForm, updateGoalWithServer,  setEditingGoal } from '../../features/goalsSlice';


function EditGoalForm({ goal }) {
  
  const dispatch = useDispatch();
  const editGoalForm = useSelector((state) => state.goals.editGoalForm);
  const editingGoal = useSelector((state) => state.goals.editingGoal);
  const showInputs = useSelector((state) => state.goals.showInputs);

  const handleEditClick = (goal) => {
    dispatch(setEditingGoal(goal));
    dispatch(setShowInputs(!showInputs));
  };

  const handleEditGoalFormChange = (event) => {
    const { name, value } = event.target;
    dispatch(setEditGoalForm({
      ...editGoalForm,
      [name]: value
    }));
  };
  
  const handleEditSubmit = (event) => {
    event.preventDefault();
    dispatch(updateGoalWithServer({
      ...editGoalForm,
      id: editingGoal.id,
      description: event.target.elements.description.value,
      date: event.target.elements.date.value,
      tasks: event.target.elements.tasks.value
    }));
  };

  return (
    <div>
      <button onClick={() => handleEditClick(goal)}>Edit</button>
            {showInputs && editingGoal.id === goal.id && (
              <>
    <form onSubmit={handleEditSubmit}>
      <label>Description:</label>
      <input
        type="text"
        name="description"
        value={editGoalForm?.description || ""}
        onChange={handleEditGoalFormChange}
      />
      <br />
      <label>Date:</label>
      <input
        type="date"
        name="date"
        value={editGoalForm?.date || ""}
        onChange={handleEditGoalFormChange}
      />
      <br />
      <label>Tasks:</label>
      <input
        type="text"
        name="tasks"
        value={editGoalForm?.tasks || ""}
        onChange={handleEditGoalFormChange}
      />
      <br />
      <br />
      <button type="submit">Save</button>
    </form>
    </>)}
    </div>
  );
}
 export default EditGoalForm
