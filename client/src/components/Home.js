import React from 'react'
import {useState, useEffect} from 'react'
import Task from './Task'
import Goal from './Goal'
import Event from './Event'

const Home = ({user}) => {

    // const [tasks, setTasks] = useState([])

    // useEffect(() => {
    //   fetch("/tasks")
    //     .then((r) => r.json())
    //     .then((data) => setTasks(data));
    // }, []);

  return (
    <div>
    <div>HELLO {user.name}!</div>
    <h1>Your plans for today</h1>
    <h2>Events:
        <Event />
    </h2>
    <h2>Goals:
        <Goal />
    </h2>
    <h2>Tasks:
        <Task />
    </h2>
    </div>
  )
}

export default Home