import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'


function RegistrationForm({setUser}) {
  const [name, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate()

  const createAccount = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return
    }
    //@@test
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
      setMessage('Password must be at least 8 characters long, contain at least one letter and one number');
      return
    }
    fetch('/users', {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({name, email, password}),
})
.then(r => r.json())
.then((data) => {
  if(data.error) {
    setUser(null)
  } else {
  setUser(data)
  navigate("/home")
  }
})
}
  return (
    <>
    {message && <p>{message}</p>}
    <h2>Sign Up!</h2>
    <form onSubmit={createAccount}>
        <label htmlFor="name"></label>
        <input
        id="name"
        value={name}
        onChange={ e => setUsername(e.target.value)}
        placeholder="Name"/>
        <br />
         <label htmlFor="email"></label>
        <input
        id="email"
        value={email}
        onChange={ e => setEmail(e.target.value)}
        placeholder="Email"/>
        <br />
        <label htmlFor="password"></label>
        <input
        type="password"
        id="password"
        value ={password}
        onChange={ (e) => setPassword(e.target.value)}
        placeholder="Password"
         />
         <br />
        <label htmlFor="confirm-password"></label>
        <input
        type="password"
        id="confirm-password"
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event.target.value)}
        placeholder="Confirm Password"
          />
          <br />
          <div className="button-container">
        <input className="inputCreate"type= "submit" value="Create Profile"  />
        </div>
    </form>
    </>
  )
}

export default RegistrationForm