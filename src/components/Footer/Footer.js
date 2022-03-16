import React, { useContext } from 'react'
import { ModeContext } from '../../context/ModeContext';
import { UserContext } from '../../context/UserContext';


export default function Footer() {
  const {darkMode,setDarkMode}=useContext(ModeContext)
  const {user,setUser}=useContext(UserContext)

  return (
    <div className={darkMode ? "footer footer-dark" : "footer"}>
      Footer
     <p>{user}</p> 
    </div>
  )
}
