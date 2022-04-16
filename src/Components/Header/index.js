import React,{useState} from 'react'
import './Header.css'
import './/HeaderResponsive.css'
import MobileNav from './MobileNav'
import Nav from './Nav'

function Header() {


  return (
    <>
    <header className='header'>
        <div className='logo'>
            <a href='#'><h1>TRAVEL</h1></a>
        </div>
      <Nav />
     <MobileNav />
    </header>
    </>
  )
}

export default Header