import React from 'react'
import './Header.css'
export default function Header(props) {

  const logout = () => {
    document.cookie = `jwttoken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    window.location.reload();
  }
  return (

    <div className='header'>
        <div>
            Admin Panel
        </div>
        <div>
          <div>
            {props.userName}
          </div>
          <button onClick={logout}>
            Logout
          </button>
        </div>

    </div>
  )
}
