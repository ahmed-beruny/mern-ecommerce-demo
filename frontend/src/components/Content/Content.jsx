import React from 'react'
import './Content.css'
import { Routes, Route, Outlet } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
import Products from '../Products/Products'
import Orders from '../Orders/Orders'
import Customers from '../Customers/Customers'
import Settings from '../Settings/Settings'
import Sidebar from '../Sidebar/Sidebar'


export default function Content() {





  return (
    <div className='content'>
      <div className='side-bar'>
        <Sidebar />
      </div>
        
        <div className='con-tent'>
          <Outlet />
        </div>
        

    </div>
  )
}
