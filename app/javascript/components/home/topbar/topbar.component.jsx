import React from 'react'
import { NavLink } from 'react-router-dom'

const Topbar = () => (
  <nav>
    <ul>
      <li><NavLink to="/"/>home</li>
      <li><NavLink to="/about"/>about</li>
      <li><NavLink to="/contact"/>contact</li>
    </ul>
  </nav>
)

export default Topbar
