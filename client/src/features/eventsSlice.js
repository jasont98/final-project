import { createSlice } from '@reduxjs/toolkit';

const eventsSlice = createSlice({
  name: 'events',
  initialState: [],
  reducers: {
    createEvent: (state, action) => {
      state.push(action.payload);
    },
    updateEvent: (state, action) => {
      const { id, updatedEvent } = action.payload;
      const index = state.findIndex(event => event.id === id);
      if (index >= 0) {
        state[index] = { ...state[index], ...updatedEvent };
      }
    },
    deleteEventl: (state, action) => {
      const index = state.findIndex(event => event.id === action.payload);
      if (index >= 0) {
        state.splice(index, 1);
      }
    }
  }
});

export const { createEvent, updateEvent, deleteEvent } = eventsSlice.actions;

export default eventsSlice.reducer;