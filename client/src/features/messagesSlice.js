import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const messageSlice = createSlice({
  name: 'message',
  initialState: {
    message: 'Your plans for today'
  },
  reducers: {
    setMessage(state, action) {
      state.message = action.payload;
    },
  },
});

export const { setMessage } = messageSlice.actions;

export default messageSlice.reducer;