import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home"
import Login from './Pages/Login'
import { useState } from "react";
import {auth} from './Firebase/Firebase-config'
import { signOut }from 'firebase/auth'
import Createpost from "./Pages/Createpost";

const App = () => {

  const [isAuth, setIsAuth] = useState(localStorage.getItem('is-Auth'));


  const GoogleSignout = () =>{
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
     window.location.pathname = '/login'
    })
  }

  return (
    <div>
      <Navbar GoogleSignout={GoogleSignout} isAuth={isAuth}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
        <Route path="/create-post" element={<Createpost isAuth={isAuth}/>}/>
        </Routes>
    </div>
  )
}

export default App
