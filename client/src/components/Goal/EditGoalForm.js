import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setShowInputs, setEditGoalForm, updateGoalWithServer,  setEditingGoal } from '../../features/goalsSlice';


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
    }));
    dispatch(setEditGoalForm({}));
    dispatch(setShowInputs(false));
  };

  return (
    <div>
      <button
       class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-3 mt-3  dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
      onClick={() => handleEditClick(goal)}>Edit</button>
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
      <button type="submit"
       class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-3 mt-3  dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
       >
        Save</button>
    </form>
    </>)}
    </div>
  );
}
 export default EditGoalForm
