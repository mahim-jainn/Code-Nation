import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import { useState } from 'react';
import PrivateRoute from './Components/PrivateRoute';

function App(){

  const [isLoggedIn, setisLoggedIn] = useState(false);

  return(
    <div className='w-screen h-full min-h-screen bg-teal-100 flex flex-col'>
      <Navbar isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn}/>

      <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login setisLoggedIn={setisLoggedIn}/>} />
        <Route path="/signup" element={<Signup setisLoggedIn={setisLoggedIn}/>} />
        <Route path="/dashboard" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard/>
          </PrivateRoute>} />
      </Routes>
    </div>
  )
}

export default App;