import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {useState, useEffect} from 'react'
import Task from './Task/Task'
import Goal from './Goal/Goal'
import Event from './Event/Event'
import { fetchEvents } from '../features/eventsSlice';
import { fetchGoals } from '../features/goalsSlice';
import { fetchTasks } from '../features/tasksSlice'
import { setMessage } from '../features/messagesSlice'

const Home = ({ user }) => {
    const events = useSelector(state => state.events.events)
    const goals = useSelector(state => state.goals.goals);
    const tasks = useSelector(state => state.tasks.tasks);
    const message = useSelector(state => state.messages.message);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchEvents());
      dispatch(fetchGoals());
      dispatch(fetchTasks());
    }, [dispatch]);

   
  
    useEffect(() => {
      if (tasks.length === 0 && goals.length === 0 && events.length === 0) {
        dispatch(setMessage('You have nothing planned today'));
      } else {
        dispatch(setMessage('Your plans for today'));
      }
    }, [tasks, goals, events, dispatch]);
  
    return (
      <div>
        <div>HELLO {user.name}!</div>
        <h1>{message}</h1>
        <h2>Events:
          <Event goals={goals} tasks={tasks} />
        </h2>
        <h2>Goals:
          <Goal tasks={tasks}/>
        </h2>
        <h2>Tasks:
          <Task />
        </h2>
      </div>
    );
  };
  
  export default Home;