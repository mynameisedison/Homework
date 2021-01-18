import React from 'react'
import Navbar from './navbar'
import logo from '../availitylogo.jpg';


function Header() {
  return (
    <div>
      <img href="https://www.availity.com" src={logo} className="App-logo" alt="logo" />
      <Navbar/>
    </div>
  )
}

export default Header
