import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'


function RegistrationForm({setUser}) {
  const [name, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [birthday, setBirthday] = useState('');

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
    body: JSON.stringify({name, email, password, birthday}),
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
    {message && <p className="text-red-500">{message}</p>}
    <h2 className="text-2xl font-bold mb-4">Sign Up!</h2>
    <form className="py-4 px-10 mx-auto bg-white rounded-lg shadow-md" onSubmit={createAccount}>
      <label className="block mb-2 font-medium" htmlFor="name"></label>
      <input
        className="block w-full p-2 rounded-lg border border-gray-300"
        id="name"
        value={name}
        onChange={ e => setUsername(e.target.value)}
        placeholder="Name"/>
      <label className="block mt-4 mb-2 font-medium" htmlFor="email"></label>
      <input
        className="block w-full p-2 mt-2 rounded-lg border border-gray-300"
        id="email"
        value={email}
        onChange={ e => setEmail(e.target.value)}
        placeholder="Email"/>
      <label className="block mt-4 mb-2 font-medium" htmlFor="password"></label>
      <input
        className="block w-full p-2 mt-2 rounded-lg border border-gray-300"
        type="password"
        id="password"
        value ={password}
        onChange={ (e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <label className="block mt-4 mb-2 font-medium" htmlFor="confirm-password"></label>
      <input
        className="block w-full p-2 mt-2 rounded-lg border border-gray-300"
        type="password"
        id="confirm-password"
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event.target.value)}
        placeholder="Confirm Password"
      />
      <label className="block mt-4 mb-2 font-medium" htmlFor="birthday"></label>
      <input
        className="block w-full p-2 mt-2 rounded-lg border border-gray-300"
        type="date"
        id="birthday"
        value={birthday}
        onChange={(event) => setBirthday(event.target.value)}
        placeholder="MM/DD/YYYY"
        title="Enter your birthday!"
      />
      <div className="mt-6 text-center">
        <input className="bg-indigo-500 text-white p-3 rounded-lg hover:bg-indigo-600" type= "submit" value="Create Profile"  />
      </div>
    </form>
  </>
)

}

export default RegistrationForm