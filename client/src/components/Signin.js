import React from 'react'
import {useState} from 'react'
import RegistrationForm from './RegistrationForm'
import { useNavigate } from "react-router-dom";

function SignIn({setUser}) {
    const [email, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const [error, setError] = useState("")

    const login = (e) => {
        e.preventDefault()
        fetch('/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password}),
    })
    .then(r => r.json())
    .then((data) => {
      if (!data.error) {
      setUser(data)
      navigate("/home")
      } else {
        setError(data.error)
      }
    })
    }


    return (
      <div className="flex justify-center w-1/3 mt-10 mx-auto ">
        <>
          {error && <p className="error-message text-red-500 text-sm mt-3">{error}</p>}
          <form className="bg-white justify-center p-6 rounded-lg shadow-md" onSubmit={login}>
            <label htmlFor="signInName" className="block font-medium text-gray-700 mb-2">Email</label>
            <input
              id="signInName"
              value={email}
              onChange={ e => setUsername(e.target.value)}
              placeholder="Email"
              className="w-full border border-gray-400 p-2 rounded-lg"
            />
    
            <label htmlFor="signInPassword" className="block font-medium text-gray-700 mb-2 mt-4">Password</label>
            <input
              type="password"
              id="signInPassword"
              value ={password}
              onChange={ (e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full border border-gray-400 p-2 rounded-lg mt-2"
            />
            <br />
            <div className="button-container mt-6">
              <input className="inputCreate bg-indigo-500 text-white p-2 rounded-lg hover:bg-indigo-600" type= "submit" value="Sign In" />
            </div>
          </form>
        </>
      </div>
    )
    
}

export default SignIn