import React, { useContext } from 'react'
import Form from './Form/Form'
import Profile from './Profile/Profile'
import { ModeContext } from '../../context/ModeContext';
import { UserContext } from '../../context/UserContext';

export default function HomePage({changeUser}) {
  const {darkMode,setDarkMode}=useContext(ModeContext)
  const {user,setUser}=useContext(UserContext)
  return (
    <div className={darkMode ? "home home-dark" : "home"}>
      HomePage
      <p>{user}</p>
      <Form changeUser={changeUser}/>
      <Profile/>
    </div>
  )
}
