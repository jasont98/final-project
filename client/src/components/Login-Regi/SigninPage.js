import React from 'react'
import {useState, useEffect} from 'react'
import RegistrationForm from './RegistrationForm'
import Signin from "./Signin.js"


function SignInCreatePage({user, setUser}) {

  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const toggleRegistrationForm = () => {
    setShowRegistrationForm(!showRegistrationForm);
  };
 
  const logout = () => {
    fetch('/logout', {
    method: "DELETE",
    headers: {
      "Content-Type": "Application/json"
    }
  })
  .then (() => {
    setUser(null)
  })
  }

  return (
    <div>
       <div>
         <div>
         <header>
     {/* <h2 className="h2-loop">GitIt</h2> */}
     </header>
         </div>
      
      <div className="container mx-auto p-5 bg-gray-300 justify-center text-center rounded text-xl font-bold">

      {user !== null && logout ? <h1 className="ml-2 mt-2 mb-4">See you again soon!</h1> : null}
      {user === null ? <h1>Welcome</h1> : null}
      {user ? <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full ml-1" onClick={logout}>Logout</button> : null}
      {user === null ? (
        <>
          <Signin setUser={setUser} />
          <br/>
          <button className="button-create" onClick={toggleRegistrationForm}>Create Profile</button>
            {showRegistrationForm && (
              <>
                <RegistrationForm setUser={setUser} user={user} />
                <button className="button-create" onClick={toggleRegistrationForm}>Return</button>
              </>
            )}
        </>
      ) : null}
        </div>
      </div>
    </div>
  );
}

export default SignInCreatePage