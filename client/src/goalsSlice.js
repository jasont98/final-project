import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGoals = createAsyncThunk('goals/fetchGoals', async () => {
  const response = await axios.get('/goals');
  return response.data;
});

export const createGoalWithServer = createAsyncThunk(
  'goals/createGoalWithServer',
  async (goal, { dispatch }) => {
    const response = await axios.post('/goals', goal);
    // dispatch(createGoal(response.data));
    return response.data;
  }
);

export const updateGoalWithServer = createAsyncThunk(
  'goals/updateGoalWithServer',
  async (goal, { dispatch }) => {
    const response = await axios.patch(`/goals/${goal.id}`, goal);
    dispatch(updateGoal({ id: goal.id, updatedGoal: response.data }));
    dispatch(fetchGoals());
    return response.data;
  }
);

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
    goalForm: {
      description: '',
      date: '',
      tasks: '',
      completed: false
    },
    // goalForm2: {
    //   description: '',
    //   date: '',
    //   tasks: '',
    //   completed: false
    // },
    showInputs: false,
    editingGoal: null
  },
  reducers: {
    createGoal(state, action) {
      state.goals.push(action.payload);
    },
    updateGoal(state, action) {
      const { id, goalForm } = action.payload;
      const goalIndex = state.goals.findIndex(goal => goal.id === id);
      state.goals[goalIndex] = { ...state.goals[goalIndex], ...goalForm };
    },
    deleteGoal(state, action) {
      state.goals = state.goals.filter(goal => goal.id !== action.payload);
    },
    setGoalForm(state, action) {
      state.goalForm = action.payload;
    },
    // setGoalForm2(state, action) {
    //   state.goalForm2 = action.payload;
    // },
    setShowInputs(state, action) {
      state.showInputs = action.payload;
    },
    setEditingGoal(state, action) {
      state.editingGoal = action.payload;
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
      const { id, goalForm } = action.payload;
      const goalIndex = state.goals.findIndex(goal => goal.id === id);
      state.goals[goalIndex] = { ...state.goals[goalIndex], ...goalForm };
      }
      }
      });
      
      export const {
      createGoal,
      updateGoal,
      deleteGoal,
      setGoalForm,
      setGoalForm2,
      setShowInputs,
      setEditingGoal
      } = goalsSlice.actions;
      
      export default goalsSlice.reducer;

