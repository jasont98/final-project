import { useSelector, useDispatch } from 'react-redux';
import { createGoalWithServer } from '../../features/goalsSlice';

function GoalForm() {
  const goalForm = useSelector(state => state.goalsSlice.goalForm);
  const dispatch = useDispatch();

  const handleCreateSubmit = (event) => {
    event.preventDefault();
    dispatch(createGoalWithServer(goalForm));
  }

  const handleGoalFormChange = (event) => {
    const { name, value } = event.target;
    dispatch(setGoalForm({ [name]: value }));
  }

  return (
    <form onSubmit={handleCreateSubmit}>
      <label>Description:</label>
      <input
        type="text"
        name="description"
        value={goalForm.description}
        onChange={handleGoalFormChange}
      />
      <br />
      <label>Date:</label>
      <input
        type="date"
        name="date"
        value={goalForm.date}
        onChange={handleGoalFormChange}
      />
      <br />
      <label>Tasks:</label>
      <input
        type="text"
        name="tasks"
        value={goalForm.tasks}
        onChange={handleGoalFormChange}
      />
      <br />
      <br />
      <button type="submit">Create</button>
    </form>
  );
}

export default GoalForm 
