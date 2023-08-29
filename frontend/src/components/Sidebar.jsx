import React from 'react'
import { Link } from 'react-router-dom'
import product from './product/product'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <ul className='sidebar-links'>
            <li>
                <Link to='/'>Dashborad</Link>
            </li>
            <li>
                <Link to='/product'>Product</Link>
            </li>
            <li>
                <Link to='/user'>Customers</Link>
            </li>
        </ul>
    </div>
  )
}
