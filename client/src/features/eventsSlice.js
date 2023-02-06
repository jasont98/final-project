import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuid } from "uuid";

export const fetchEvents = createAsyncThunk('events/fetchEvents', async () => {
  const response = await axios.get('/events');
  return response.data;
});

export const createEventWithServer = createAsyncThunk(
  'events/createEventWithServer',
  async (event, { dispatch }) => {
    const response = await axios.post('/events', event);
    // dispatch(createEvent(response.data));
    return response.data;
  }
);

export const updateEventWithServer = createAsyncThunk(
  'events/updateEventWithServer',
  async (event, { dispatch }) => {
    console.log(`Updating event with ID: ${event.id}`);
    const response = await axios.patch(`/events/${event.id}`, event);
    dispatch(updateEvent({ id: event.id, updatedEvent: response.data }));
    dispatch(fetchEvents());
    return response.data;
  }
)

export const deleteEventWithServer = createAsyncThunk(
  'events/deleteEventWithServer',
  async (id, { dispatch }) => {
    await axios.delete(`/events/${id}`);
    dispatch(deleteEvent(id));
  }
);


const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    events: [],
    createEventForm: {
      title: '',
      date: '',
      goals: '',
      tasks: '',
      completed: false
    },
    editEventForm: {
      title: '',
      date: '',
      goals: '',
      tasks: '',
      completed: false
    },
    showInputs: false,
    editingEvent: null
  },
  reducers: {
    createEvent(state, action) {
      state.events.push({
        id: uuid(), // use the uuid function to generate a unique id
        text: action.payload,
      });
    },
    updateEvent(state, action) {
      const { id, updatedEvent } = action.payload;
      const eventIndex = state.events.findIndex(event => event.id === id);
      state.events[eventIndex] = { ...state.events[eventIndex], ...updatedEvent };
    },
    deleteEvent(state, action) {
      state.events = state.events.filter(event => event.id !== action.payload);
    },
    setCreateEventForm(state, action) {
      state.createEventForm = action.payload;
    },
    setEditEventForm(state, action) {
      state.editEventForm = action.payload;
    },
    setShowInputs(state, action) {
      state.showInputs = action.payload;
    },
    setEditingEvent(state, action) {
      state.editingEvent = action.payload;
    }
  },
  extraReducers: {
    [fetchEvents.fulfilled]: (state, action) => {
      state.events = action.payload;
    },
    [createEventWithServer.fulfilled]: (state, action) => {
      state.events.push(action.payload);
    },
    [updateEventWithServer.fulfilled]: (state, action) => {
      const { id, updatedEvent } = action.payload;
      const eventIndex = state.events.findIndex(event => event.id === id);
      state.events[eventIndex] = { ...state.events[eventIndex], ...updatedEvent };
      }
      }
      });
      
      export const {
      createEvent,
      updateEvent,
      deleteEvent,
      setEditEventForm,
      setCreateEventForm,
      setShowInputs,
      setEditingEvent
      } = eventsSlice.actions;
      
      export default eventsSlice.reducer;

