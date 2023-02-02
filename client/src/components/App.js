import React from 'react'
import { useState, useEffect } from 'react'
import SigninPage from './SigninPage'
import { Routes, Route } from "react-router-dom";
import Home from "./Home"

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
      <Routes>
       <Route path="/login" element={<SigninPage user={user} setUser={setUser}/>} />
       <Route path="/home" element={<Home user={user}/>} />
       </Routes>
   </div>
  )
}

export default App
