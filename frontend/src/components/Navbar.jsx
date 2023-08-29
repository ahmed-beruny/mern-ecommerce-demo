import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'>
            Logo
        </div>
        <ul className='nav-links'>
            <li>
                <a href='/'>Home</a>
            </li>
            <li>
                <a href='/'>About</a>
            </li>
            <li>
                <a href='/'>Contact</a>
            </li>
        </ul>
    </div>
  )
}
