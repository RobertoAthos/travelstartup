import React from 'react'
import './Body.css'
import './/BodyResponsive.css'

function Body() {
  return (
       <body>
           <div className='hero'>
               <div className='txt1'>
               <h2>ADVENTURE AWAITS</h2>
               <h3>What are you wating for ?</h3>
               <div className='btn'>
               <button className='button'><p>Get Started</p></button>
               <button className='button' id='btn-active'><p>WATCH TRAILER</p></button>
               </div>
               </div>
           </div>
           <main>
            <section className='cards'>
                <h2>Check out these EPIC Destinations !</h2>
                <div className='cards-imgs'>
                    <div className='first-trips'>
                        <div className='cards-1'>
                        <label className='label'>ADVENTURE</label>
                        <img src='images/img-9.jpg'></img>
                        <p>Explore the hidden waterfall deep inside the Amazon Jungle</p>
                        </div>
                        <div className='second-trip'>
                        <div className='cards-1'>
                        <label className='label'>LUXURY</label>
                        <img src='images/img-2.jpg'></img>
                        <p>Travel through the island  of Bali in a Private Cruise</p>
                        </div>
                        </div>
                    </div>
                    <div className='third-trip'>
                        <div className='cards-2'>
                            <img src='images/img-8.jpg'></img>
                            <p>Ride through Sahara Desert on a <br /> guided camel tour </p>
                            <label className='label2'>Adrenaline</label>
                        </div>
                        <div className='cards-2'>
                            <img src='images/img-3.jpg'></img>
                            <p>Ride through Sahara Desert on <br /> a guided camel tour </p>
                            <label className='label2'>Mystery</label>
                        </div>
                        <div className='cards-2'>
                            <img src='images/img-4.jpg'></img>
                            <p>Ride through Sahara Desert on a <br />  guided camel tour </p>
                            <label className='label2'>Adventure</label>
                        </div>
        
                    </div>
                </div>
            </section>
           </main>
       </body>
  )
}

export default Body