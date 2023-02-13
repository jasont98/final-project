import React from 'react'
import {useState, useEffect} from 'react'
import RegistrationForm from './RegistrationForm'
import Signin from "./Signin.js"


function SignInCreatePage({user, setUser}) {

 
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
     <h2 className="h2-loop">GitIt</h2>
     </header>
         </div>
      
      <div className="modalParent">

      {user ? <button className="button-create" onClick={logout}>Logout</button> : null}
      {user === null ? <h1>Welcome</h1> : null}
      {user !== null && logout ? <h1>See you again soon!</h1> : null}
      {user === null ? (
        <>
          <Signin setUser={setUser} />
          <br/>
          <button className="button-create" >Create Profile</button>

            <br/>
            <RegistrationForm setUser={setUser} user={user} />
            
            <button className="button-create">Return</button>
          
        </>
      ) : null}
        </div>
      </div>
    </div>
  );
}

export default SignInCreatePage