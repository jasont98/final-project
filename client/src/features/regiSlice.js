import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createUserWithServer = createAsyncThunk(
'users/createUserWithServer',
    async (user, { dispatch }) => {
      const response = await axios.post('/users', user);
      return response.data;
    });

const regiSlice = createSlice({
  name: 'registration',
  initialState: {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    message: '',
    birthday: '',
    loading: false,
    error: null,
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setConfirmPassword: (state, action) => {
      state.confirmPassword = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    setBirthday: (state, action) => {
      state.birthday = action.payload;
    },
  },
  extraReducers: {
    [createUserWithServer.fullfilled]: (state) => {
      state.loading = true;
    },
    [createUserWithServer.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.message = action.payload;
    },
    [createUserWithServer.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export const { setName, setEmail, setPassword, setConfirmPassword, setMessage, setBirthday } = regiSlice.actions;

export default regiSlice.reducer;
