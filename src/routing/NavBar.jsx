import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="navbar">
        <div className='container'>
            <ul className='navbar__list'>
                <li><NavLink className='navbar-link' to='/drag-1'>One</NavLink></li>
                <li><NavLink className='navbar-link' to='/drag-2'>Two</NavLink></li>
                <li><NavLink className='navbar-link' to='/drag-3'>Three</NavLink></li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar
