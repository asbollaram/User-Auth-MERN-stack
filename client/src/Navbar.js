import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul>
            <Link to='/Register'>Register</Link>
            <Link to='/Login'>Login</Link>
        </ul>
    </div>
  )
}

export default Navbar