import React, { useContext } from 'react'
import { ModeContext } from '../../context/ModeContext';
import { UserContext } from '../../context/UserContext';

export default function Header({toggleMode}) {

const {darkMode,setDarkMode}=useContext(ModeContext)
const {user,setUser}=useContext(UserContext)

  return (
    <div className={darkMode ? "header header-dark" : "header"}>
      Header
      <button className={darkMode ? "mode-btn mode-btn-dark" : "mode-btn"} onClick={toggleMode}>{darkMode ? "Light Mode":"Dark Mode"}</button>
      <p>{user}</p>
    </div>
  )
}
