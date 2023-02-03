import React from 'react'
import { useState, useEffect } from 'react'
import SigninPage from './SigninPage'
import { Routes, Route } from "react-router-dom";
import Home from "./Home"
import NavBar from './NavBar';
import Calendar from "./Calendar";
import Task from "./Task";
import Goal from "./Goal";
import Event from "./Event"
import Profile from "./Profile";

const App = () => {

  const [user, setUser] = useState("")
    

    useEffect(()=> {
      fetch('/me')
      .then(r => r.json())
      .then(data => {
        if(data.error) {
          setUser(null)
        } else {
        setUser(data)
        }
      } )
    }, [])

  return (
    <div>
      <NavBar />
      <Routes>
       <Route path="/login" element={<SigninPage user={user} setUser={setUser}/>} />
       <Route path="/home" element={<Home user={user}/>} />
       <Route path="/calendar" element={<Calendar/>} />
       <Route path="/login" element={<SigninPage/>} />
       <Route path="/tasks" element={<Task user={user}/>} />
       <Route path="/goals" element={<Goal/>} />
       <Route path="/events" element={<Event/>} />
       <Route path="/profile" element={<Profile/>} />
       </Routes>
   </div>
  )
}

export default App