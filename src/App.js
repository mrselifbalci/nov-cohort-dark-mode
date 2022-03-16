import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {ModeContext} from './context/ModeContext'
import {UserContext} from './context/UserContext'
import HomePage from './components/Home/HomePage';


function App() {
  const [darkMode,setDarkMode]=useState(false)
  const [user,setUser]=useState('Elif')


  const toggleMode=()=>{
    setDarkMode(!darkMode)
  }

  const changeUser=(userName)=>{
    setUser(userName)
  }

  return (
    <div className="App">
      <UserContext.Provider value={{user,setUser}}>
        <ModeContext.Provider value={{darkMode,setDarkMode}}>
          <Header toggleMode={toggleMode}/>
          <HomePage changeUser={changeUser}/>
          <Footer/>
        </ModeContext.Provider>
      </UserContext.Provider>
      
       
    </div>
  );
}

export default App;
