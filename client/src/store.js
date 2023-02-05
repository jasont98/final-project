import { configureStore } from '@reduxjs/toolkit';
import goalsReducer from './features/goalsSlice';

const store = configureStore({
  reducer: {
    goals: goalsReducer
  }
});

export default store;