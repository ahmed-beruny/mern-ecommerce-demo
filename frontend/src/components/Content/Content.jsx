import React from 'react'
import './Content.css'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
import Products from '../Products/Products'
import Orders from '../Orders/Orders'
import Customers from '../Customers/Customers'
import Settings from '../Settings/Settings'

export default function Content() {
  return (
    <div className='content'>
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/products' element={<Products />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/customers' element={<Customers />} />
            <Route path='/settings' element={<Settings />} />
        </Routes>

    </div>
  )
}
