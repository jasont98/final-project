import { configureStore } from '@reduxjs/toolkit';
import goalsReducer from './goalsSlice';

const store = configureStore({
  reducer: {
    goals: goalsReducer
  }
});

export default store;