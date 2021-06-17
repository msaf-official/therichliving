import React, { useEffect, useState } from "react";
import { BrowserRouter as Link,useHistory } from "react-router-dom";
import "./header.css";
import Sidebar from "./Sidebar";
import FormatAlignJustifyIcon from "@material-ui/icons/FormatAlignJustify";

function Header() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(-100);
  const [backgroundColor, setBackgroundColor] = useState("dodgerblue");
  const [rotate, setRotate] = useState("0deg");
  let history = useHistory();

  const sideBar = () => {
    if (open) {
      setValue(-100);
      setOpen(false);
      
      setRotate("0deg")
      return;
    }

    setValue(0);
    setRotate("45deg")
    setOpen(true);
  };

  useEffect(() => {
    window.addEventListener("scroll",()=>{
      if(window.pageYOffset >= 100) {
        setBackgroundColor("#ffffff")
      }
      else {
        setBackgroundColor("dodgerblue")
      }
    })
  },[]);

  
  return (
    <div class="header" style={{background:backgroundColor,alignItems:"center",fontFamily:'Roboto sans-serif',transition: "ease-in-out 0.4s"}}>
      <div className="out_sidebar_container" onClick={sideBar}>
        
        <div style={{width:30,height:2,transition: "transform 1s",transform:`rotate(${rotate})`,background:(backgroundColor == "dodgerblue")?"#fff":"#000",marginBottom:(rotate == "45deg")?0:5}}></div>
        <div style={{width:30,height:2,transition: "transform 1s",display:(rotate == "45deg")?"none":"block",background:(backgroundColor == "dodgerblue")?"#fff":"#000",marginBottom:(rotate == "45deg")?0:5}}></div>
        <div style={{width:30,height:2,transition: "transform 1s",transform:`rotate(-${rotate})`,background:(backgroundColor == "dodgerblue")?"#fff":"#000",marginBottom:(rotate == "45deg")?0:5}}></div>

        <Sidebar value={value} />
      </div>
      <h2 style={{ marginLeft: "20px",color:(backgroundColor == "dodgerblue")?"#fff":"#000"}}>TRL</h2>
      <div class="nav">
        <ul class="nav-links" style={{color:(backgroundColor == "dodgerblue")?"#fff":"#000"}}>
          <li>
            <a href="#hero" data-after="Home">
              Home
            </a>
          </li>
          <li>
            <a href="#about" data-after="About">
              About
            </a>
          </li>
          <li>
            <a href="#contacts" data-after="Contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div>
        <button
          className="login_button"
          style={{ fontSize: 20, padding: "5px 10px",color:(backgroundColor == "dodgerblue")?"#fff":"#000" }}
          onClick={()=>{
            history.push("/login")
          }}
        >
          Login
        </button>
        
        <button
          className="login_button"
          style={{ fontSize: 20, padding: "5px 10px",color:(backgroundColor == "dodgerblue")?"#fff":"#000" }}
          onClick={()=>{
            history.push("/register")
          }}
        >
          Register
        </button>
     
      </div>
    </div>
  );
}

export default Header;
