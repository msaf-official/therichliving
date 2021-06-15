import React,{useState} from 'react'
import './againheader.css'
import Sidebar from './Sidebar'
import FormatAlignJustifyIcon from "@material-ui/icons/FormatAlignJustify";
import logo from '../../images/therichliving_logo.jpeg'
function AgainHeader() {
const [open,setOpen]=useState(false);
const [value,setValue]=useState(-100);
  const  sideBar = ()=>{
      console.log(value)
      if(open){
        setValue(-100)
        setOpen(false);
        return;
      }
    
    setValue(0)
    setOpen(true)
   
    
   }


    return (
        <div>
        <div class="header">
            <div className="out_sidebar_container">
                
            <FormatAlignJustifyIcon className="icon" style={{fontSize:40}} onClick={sideBar} />
           
            <Sidebar value={value}/>
            </div>
        {/* <h2 style={{marginLeft:'20px'}}>TLR</h2> */}
        <img src={logo} style={{width:200,height:100,marginLeft:30 }}/>
        <div class="nav">
            <ul class="nav-links">
                 <li><a href="#hero" data-after="Home">Home</a></li>
               <li><a href="#about" data-after="About">About</a></li>
                <li><a href="#contacts" data-after="Contact">Contact</a></li>

            </ul>
  
            
        
              
        </div>
        <div>
            <button className='login_button' style={{fontSize:30}}>Login</button>
        </div>
    </div>
        </div>
    )
}

export default AgainHeader