import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>    
        <div className='bg-light p-2'>
            <ul className='nav justify-content-end nav-pills'>
                <NavLink className='nav-link' to='/register'>Register</NavLink>
                <NavLink className='nav-link' to='/login'>Login</NavLink>
            </ul>
        </div>
    </div>
  )
}

export default Navbar