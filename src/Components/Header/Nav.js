import React from 'react'
import './/HeaderResponsive.css'
import './Header.css'

function Nav() {
  return (
    <nav className='nav'>
    <a href='#'>Home</a>
    <a href='#'>Services</a>
    <a href='#'>Products</a>
    <a href='#' id='active'>SIGN UP</a>
</nav>
  )
}

export default Nav