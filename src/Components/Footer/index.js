import React from 'react'
import './Footer.css'
import './/FooterResponsive.css'

function Footer() {
  return (
    <footer className='footer'>
    <div className='form'>
        <h3>Join the Adventure newsletter to receive our best vacation deals </h3>
        <h4>You can unsubscribe any time.</h4>
        <input type='text' placeholder='Your Email'></input>
        <input type='submit' value='SUBSCRIBE'></input>
    </div>
    <div className='info'>
        <div className='about-us'>
            <h2>About Us</h2>
          <a href='#'><p>How it Works</p></a>  
          <a href='#'><p>Testemonials</p></a>
          <a href='#'><p>Careers</p></a>  
          <a href='#'><p>Investors</p></a> 
          <a href='#'><p>Terms of Service</p></a> 
        </div>
        <div className='contact'>
            <h2>Contact Us</h2>
            <a href='#'><p>Contact</p></a>  
            <a href='#'><p>Support</p></a>   
            <a href='#'><p>Destinations</p></a>   
            <a href='#'><p>Sponsorships</p></a>   
        </div>
        <div className='social-media'>
            <h2>Social Media</h2>
            <a href='#'><p>Instagram</p></a>
            <a href='#'><p>Facebook</p></a>
            <a href='#'><p>Youtube</p></a>
            <a href='#'><p>Twitter</p></a>
        </div>
    </div>
    <div className='logo'>
            <a href='#'><h1>TRAVEL</h1></a>
        </div>
    </footer>
  )
}

export default Footer