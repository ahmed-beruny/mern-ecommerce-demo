import React from 'react'
import product from './product/product'
import user from './user/user'
import { BrowserRouter as Router, Switch, Route,Routes } from 'react-router-dom'

export default function Content() {
  return (
    <div className='content'>
    <Routes>
      <Route path="/product" exact Component={product}></Route>
      <Route path="/user" Component={user}></Route>
    </Routes>

    </div>
  )
}
