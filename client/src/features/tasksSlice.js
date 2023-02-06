
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuid } from "uuid";

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await axios.get('/tasks');
  return response.data;
});

export const createTaskWithServer = createAsyncThunk(
  'tasks/createTaskWithServer',
  async (task, { dispatch }) => {
    const response = await axios.post('/tasks', task);
    // dispatch(createGoal(response.data));
    return response.data;
  }
);

export const updateTaskWithServer = createAsyncThunk(
  'tasks/updateTaskWithServer',
  async (task, { dispatch }) => {
    console.log(`Updating task with ID: ${task.id}`);
    const response = await axios.patch(`/tasks/${task.id}`, task);
    dispatch(updateTask({ id: task.id, updatedTask: response.data }));
    dispatch(fetchTasks());
    return response.data;
  }
)


export const deleteTaskWithServer = createAsyncThunk(
  'tasks/deleteTaskWithServer',
  async (id, { dispatch }) => {
    await axios.delete(`/tasks/${id}`);
    dispatch(deleteTask(id));
  }
);

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    createTaskForm: {
      description: '',
      date: '',
      completed: false
    },
    editTaskForm: {
      description: '',
      date: '',
      completed: false
    },
    showInputs: false,
    editingTask: null
  },
  reducers: {
    createTask(state, action) {
      state.tasks.push({
        id: uuid(), // use the uuid function to generate a unique id
        text: action.payload,
      });
    },
    updateTask(state, action) {
      const { id, updatedTask } = action.payload;
      const taskIndex = state.tasks.findIndex(task => task.id === id);
      state.tasks[taskIndex] = { ...state.tasks[taskIndex], ...updatedTask };
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    setCreateTaskForm(state, action) {
      state.createTaskForm = action.payload;
    },
    setEditTaskForm(state, action) {
      state.editTaskForm = action.payload;
    },
    setShowInputs(state, action) {
      state.showInputs = action.payload;
    },
    setEditingTask(state, action) {
      state.editingTask = action.payload;
    }
  },
  extraReducers: {
    [fetchTasks.fulfilled]: (state, action) => {
      state.tasks = action.payload;
    },
    [createTaskWithServer.fulfilled]: (state, action) => {
      state.tasks.push(action.payload);
    },
    [updateTaskWithServer.fulfilled]: (state, action) => {
      const { id, updatedTask } = action.payload;
      const taskIndex = state.tasks.findIndex(task => task.id === id);
      state.tasks[taskIndex] = { ...state.tasks[taskIndex], ...updatedTask };
      }
      }
      });
      
      export const {
      createTask,
      updateTask,
      deleteTask,
      setEditTaskForm,
      setCreateTaskForm,
      setShowInputs,
      setEditingTask
      } = tasksSlice.actions;
      
      export default tasksSlice.reducer;
