import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Login from './Login';
import Myprofile from './Myprofile';
import Navbar from './Navbar';
import Register from './Register';

const App = () => {
  return (
    <div>
      <Navbar/>
        <Routes>
        <Route path='/Register' element={<Register/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/MyProfile' element={<Myprofile/>} />
        
        </Routes>
    </div>
  )
}

export default App