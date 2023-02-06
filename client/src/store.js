import { configureStore } from '@reduxjs/toolkit';
import goalsReducer from './features/goalsSlice';
import tasksReducer from './features/tasksSlice';
import messagesReducer from './features/messagesSlice';

const store = configureStore({
  reducer: {
    goals: goalsReducer,
    tasks: tasksReducer,
    messages: messagesReducer 
  }
});

export default store;
