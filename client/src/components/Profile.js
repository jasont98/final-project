import React from 'react'

const Profile = ({user}) => {
  return (
    <div>
      <h1>Name: {user.name}</h1>
      <h1>Birthday: {user.birthday}</h1>
      <h1>{user.goals}</h1>
    </div>
  )
}

export default Profile