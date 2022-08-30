import React,{useState, createContext} from 'react';
import { Routes,Route } from 'react-router-dom';
import Login from './Login';
import Myprofile from './Myprofile';
import Navbar from './Navbar';
import Register from './Register';

export const store = createContext();
const App = () => {
  // createing token variable to store the token
  const [token, setToken]= useState(null);
  return (
    <div>
    <store.Provider value={[token,setToken]}>
      <Navbar/>
        <Routes>
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/myProfile' element={<Myprofile/>} />        
        </Routes>
        </store.Provider>
    </div>
  )
}

export default App