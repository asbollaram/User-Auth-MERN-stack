import React,{useContext,useState} from 'react'
import { NavLink } from 'react-router-dom'
import { store } from './App'

const Navbar = () => {
  const [token,setToken] = useContext(store);
  return (
    <div>    
    {!token &&
        <div className='bg-dark p-2'>
            <ul className='nav justify-content-center nav-pills'>
                <NavLink className='nav-link text-white' to='/Home'>Home</NavLink>
                <NavLink className='nav-link text-white' to='/register'>Register</NavLink>
                <NavLink className='nav-link text-white' to='/login'>Login</NavLink>
            </ul>
        </div>
      }
    </div>
  )
}

export default Navbar