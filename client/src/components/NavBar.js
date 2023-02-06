import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
        <NavLink to="/home">
            Home
        </NavLink>
        <NavLink to="/calendar">
            Calendar
        </NavLink>
        <NavLink to="/profile">
            Profile
        </NavLink>
        <NavLink to="/login">
            Logout
        </NavLink>
    </div>
  )
}

export default NavBar