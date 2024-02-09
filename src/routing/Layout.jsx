import React from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import '../App.css'

const Layout = () => {
  return (
    <div className='root'>
        <NavBar/>
        <div className="main-container">
          <Outlet/>
        </div>
        <footer>Drag and drop from Ulbi TV</footer>
    </div>
  )
}

export default Layout
