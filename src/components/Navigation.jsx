import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { logout } from '../store/userSlice'

const Navigation = () => {
  const isAuthenticated = useSelector((state)=>state.user.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate('');
  }
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="">Home</NavLink>
        </li>
        <li>
          {isAuthenticated ? <button onClick={handleLogout}>Logout</button> : <NavLink to="login">Login</NavLink> }         
        </li> 
        </ul>
    </nav>
  )
}

export default Navigation