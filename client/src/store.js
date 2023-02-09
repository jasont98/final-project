import { configureStore } from '@reduxjs/toolkit';
import goalsReducer from './features/goalsSlice';
import tasksReducer from './features/tasksSlice';
import messagesReducer from './features/messagesSlice';
import eventsReducer from './features/eventsSlice';
const store = configureStore({
  reducer: {
    goals: goalsReducer,
    tasks: tasksReducer,
    messages: messagesReducer,
    events: eventsReducer
  }
});

export default store;
