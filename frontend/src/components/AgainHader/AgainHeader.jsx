import React from 'react'
import './againheader.css'
function AgainHeader() {
    return (
        <div>
              <div class="header">
        <h2 style={{marginLeft:'20px'}}>TLR</h2>
        <div class="nav">
            <ul class="nav-links">

                
                <li><a href="#hero" data-after="Home">Home</a></li>
                {/* <li><a href="#services" data-after="Service">Services</a></li>
                <li><a href="#projects" data-after="Projects">Projects</a></li> */}
                <li><a href="#about" data-after="About">About</a></li>
                <li><a href="#contacts" data-after="Contact">Contact</a></li>

            </ul>
  
            
            {/* <div class="burger">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div> */}
              
        </div>
        <div>
            <button className='login_button'>Login</button>
        </div>
    </div>
        </div>
    )
}

export default AgainHeader
