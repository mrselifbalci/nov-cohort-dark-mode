import React, { useContext } from 'react'
import { ModeContext } from '../../../context/ModeContext';
import { UserContext } from '../../../context/UserContext';

export default function Profile() {
  const {darkMode,setDarkMode}=useContext(ModeContext)
  const {user,setUser}=useContext(UserContext)
  return (
    <div className={darkMode ? "profile profile-dark" : "profile"}>
      Profile
      <p>{user}</p>
    </div>
  )
}
