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
        <div className='right-navs'>
          <div className='nav-items'>
            {props.loginInfo.user.name}
          </div>
          <div className='nav-items'>
            <button onClick={logout}> Logout</button>
          </div>

        </div>

    </div>
  )
}
