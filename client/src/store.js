import { configureStore } from '@reduxjs/toolkit';
import goalsReducer from './features/goalsSlice';
import tasksReducer from './features/tasksSlice';
import messagesReducer from './features/messagesSlice';
import eventsReducer from './features/eventsSlice';
import calendarReducer from './features/calendarSlice';
const store = configureStore({
  reducer: {
    goals: goalsReducer,
    tasks: tasksReducer,
    messages: messagesReducer,
    events: eventsReducer,
    calendar: calendarReducer
  }
});

export default store;
