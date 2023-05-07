import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import { NavLink, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <div className="col-xs-2 col-xs-offset-1">
        <div className="list-group">
          <NavLink className="list-group-item" to="/about">About</NavLink>
          <NavLink className="list-group-item" to="/home">Home</NavLink>
        </div>
      </div>
      <Routes>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
      </Routes>
    </div>
  )
}
