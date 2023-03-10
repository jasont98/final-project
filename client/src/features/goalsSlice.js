import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuid } from "uuid";

export const fetchGoals = createAsyncThunk('goals/fetchGoals', async () => {
  const response = await axios.get('/goals');
  return response.data;
});

export const createGoalWithServer = createAsyncThunk(
  'goals/createGoalWithServer',
  async (goal, { dispatch }) => {
    if (!goal.description || !goal.date) {
      dispatch(setErrorMessage('Both description and date are required'));
      return;
    }
    const response = await axios.post('/goals', goal);
    return response.data
  }
);

export const updateGoalWithServer = createAsyncThunk(
  'goals/updateGoalWithServer',
  async (goal, { dispatch }) => {
    console.log(`Updating goal with ID: ${goal.id}`);
    const { completed, ...goalDetails } = goal;
    const response = await axios.patch(`/goals/${goal.id}`, { description: goal.description });
    dispatch(updateGoal({ id: goal.id, updatedGoal: response.data }));
    dispatch(fetchGoals());
    return response.data;
  }
)

export const updateGoalCompletionWithServer = createAsyncThunk(
  'goals/updateGoalCompletionWithServer',
  async (goal, { dispatch }) => {
    console.log(`Updating goal completion with ID: ${goal.id}`);
    const response = await axios.patch(`/goals/${goal.id}/completion`, goal);
    dispatch(updateGoal({ id: goal.id, updatedGoal: response.data }));
    dispatch(fetchGoals());
    return response.data;
  }
)

export const deleteGoalWithServer = createAsyncThunk(
  'goals/deleteGoalWithServer',
  async (id, { dispatch }) => {
    await axios.delete(`/goals/${id}`);
    dispatch(deleteGoal(id));
  }
);

const goalsSlice = createSlice({
  name: 'goals',
  initialState: {
    goals: [],
    createGoalForm: {
      description: '',
      date: '',
      completed: false
    },
    editGoalForm: {
      description: '',
      date: '',
      completed: false
    },
    createGoalTaskForm: {
      description: '',
      completed: false
    },
    editGoalTaskForm: {
      description: '',
      completed: false
    },
    showInputs: false,
    editingGoal: null,
    errorMessage: null
  },
  
  reducers: {
    createGoal(state, action) {
      state.goals.push({
        id: uuid(), // use the uuid function to generate a unique id
        text: action.payload,
      });
    },
    setErrorMessage(state, action) {
      state.errorMessage = action.payload;
    },
    updateGoal(state, action) {
      const { id, updatedGoal } = action.payload;
      const goalIndex = state.goals.findIndex(goal => goal.id === id);
      state.goals[goalIndex] = { ...state.goals[goalIndex], ...updatedGoal };
    },
    deleteGoal(state, action) {
      state.goals = state.goals.filter(goal => goal.id !== action.payload);
    },
    setCreateGoalForm(state, action) {
      state.createGoalForm = action.payload;
    },
    setEditGoalForm(state, action) {
      state.editGoalForm = action.payload;
    },
    setShowInputs(state, action) {
      state.showInputs = action.payload;
    },
    setEditingGoal(state, action) {
      state.editingGoal = action.payload;
    },
    setShowGoalTaskInputs(state, action) {
      state.showGoalTaskInputs = action.payload;
    },
    setEditingGoalTask(state, action) {
      state.editingGoalTask = action.payload;
    }
  },
  extraReducers: {
    [fetchGoals.fulfilled]: (state, action) => {
      state.goals = action.payload;
    },
    [createGoalWithServer.fulfilled]: (state, action) => {
      state.goals.push(action.payload);
    },
    [updateGoalWithServer.fulfilled]: (state, action) => {
      const { id, updatedGoal } = action.payload;
      const goalIndex = state.goals.findIndex(goal => goal.id === id);
      state.goals[goalIndex] = { ...state.goals[goalIndex], ...updatedGoal };
      }
      }
      });
      
      export const {
      createGoal,
      updateGoal,
      deleteGoal,
      setEditGoalForm,
      setCreateGoalForm,
      setShowInputs,
      setEditingGoal,
      setShowGoalTaskInputs,
      setEditingGoalTaskInputs,
      createGoalTaskForm,
      setErrorMessage,
      editGoalTaskForm,
      } = goalsSlice.actions;
      
      export default goalsSlice.reducer;

