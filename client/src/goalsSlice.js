import { createSlice } from '@reduxjs/toolkit';

const goalsSlice = createSlice({
  name: 'goals',
  initialState: [],
  reducers: {
    createGoal: (state, action) => {
      state.push(action.payload);
    },
    updateGoal: (state, action) => {
      const { id, updatedGoal } = action.payload;
      const index = state.findIndex(goal => goal.id === id);
      if (index >= 0) {
        state[index] = { ...state[index], ...updatedGoal };
      }
    },
    deleteGoal: (state, action) => {
      const index = state.findIndex(goal => goal.id === action.payload);
      if (index >= 0) {
        state.splice(index, 1);
      }
    }
  }
});

export const { createGoal, updateGoal, deleteGoal } = goalsSlice.actions;

export default goalsSlice.reducer;
