import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentDate: new Date(),
  today: new Date().getDate(),
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    nextMonth: state => {
        state.currentDate = new Date(
          state.currentDate.getFullYear(),
          state.currentDate.getMonth() + 1,
          state.currentDate.getDate()
        );
      },
      prevMonth: state => {
        state.currentDate = new Date(
          state.currentDate.getFullYear(),
          state.currentDate.getMonth() - 1,
          state.currentDate.getDate()
        );
      },
    setCurrentDate: (state, action) => {
      state.currentDate = action.payload;
    },
    setToday: (state, action) => {
      state.today = action.payload;
    },
  },
});

export const { setCurrentDate, setToday, nextMonth, prevMonth } = calendarSlice.actions;

export default calendarSlice.reducer;
