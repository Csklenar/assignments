import React from 'react'
import {Link} from 'react-router-dom'


export default function Navbar() {
  return (
    <div className='navbar'>
      <Link className='nav-items' to='/'>
      Home
      </Link>

      <Link className='nav-items' to='/contact'>
      Contact
      </Link>
    </div>
  )
}
        
