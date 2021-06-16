import React from 'react'
import './header.css'
function Sidebar({value}) {
    console.log(value)
    return (<>
         <div className="sidebar_container" style={{ transform:`translateX(${value}%)`,
        transition:"all 0.5s ease"}}>
            <div className="sidebar_box">
                <ul>
                <li><a href="#hero" data-after="Home">Home</a></li>
               <li><a href="#about" data-after="About">About</a></li>
                <li><a href="#contacts" data-after="Contact">Contact</a></li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Sidebar
