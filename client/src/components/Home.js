import React from 'react'
import {useState, useEffect} from 'react'
import Task from './Task'
import Goal from './Goal/Goal'
import Event from './Event'

const Home = ({ user }) => {
    const [events, setEvents] = useState([]);
    const [goals, setGoals] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [message, setMessage] = useState('Your plans for today');
  
    useEffect(() => {
      Promise.all([
        fetch('/events').then(r => r.json()).then(data => setEvents(data)),
        fetch('/goals').then(r => r.json()).then(data => setGoals(data)),
        fetch('/tasks').then(r => r.json()).then(data => setTasks(data)),
      ]);
    }, []);
  
    useEffect(() => {
      if (tasks.length === 0 && goals.length === 0 && events.length === 0) {
        setMessage('You have nothing planned today');
      } else {
        setMessage('Your plans for today');
      }
    }, [tasks, goals, events]);
  
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