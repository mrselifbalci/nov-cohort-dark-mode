import React, { useContext, useState } from 'react'
import { ModeContext } from '../../../context/ModeContext';
import { UserContext } from '../../../context/UserContext';

export default function Form({changeUser}) {
  const {darkMode,setDarkMode}=useContext(ModeContext)
  const {user,setUser}=useContext(UserContext)
  const [userName,setUserName]=useState('')
  return (
    <form onSubmit={(e)=>{e.preventDefault();changeUser(userName)}} className={darkMode ? "form form-dark" : "form"}>
      <h3>Form</h3>
      <input placeholder='Change username' value={userName} onChange={(e)=>setUserName(e.target.value)}/>
      <button type="submit">Submit</button>
      
      <p>{user}</p>
    </form>
  )
}
