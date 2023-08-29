import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
export default function Sidebar() {
  return (
    <div className='sidebar'>
        <ul className='sidebar-list'>
            <li>
                <Link to='/'>Dashboard</Link>
            </li>
            <li>
                <Link to='/customers'>Customers</Link>
            </li>
            <li>
                <Link to='/products'>Products</Link>
            </li>
            <li>
                <Link to='/orders'>Orders</Link>
            </li>
            <li>
                <Link to='/settings'>Settings</Link>
            </li>
        </ul>

    </div>
  )
}
