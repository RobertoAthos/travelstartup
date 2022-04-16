import React,{useState} from 'react'
import './/HeaderResponsive.css'
import './Header.css'


function MobileNav() {

    const [open,setOpen] = useState(false)

  return (
      <>
      <div className="menu-toggle" onClick={()=>setOpen(!open)}>
        <div className="menu"></div>
        <div className="menu"></div>
        <div className="menu"></div>
      </div>
      <div className="menu-mobile">
    {open && <nav className="nav-mobile">
      <a href="#">Home</a>
      <a href="#">Services</a>
      <a href="#">Products</a>
      <a href="#">SIGN UP</a>
    </nav>}
  </div>
  
      </>
    
  )
}

export default MobileNav