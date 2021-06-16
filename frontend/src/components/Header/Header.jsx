import React, { useEffect, useState } from "react";
import "./header.css";
import Sidebar from "./Sidebar";
import FormatAlignJustifyIcon from "@material-ui/icons/FormatAlignJustify";

function Header() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(-100);
  const [backgroundColor, setBackgroundColor] = useState("none");
  const sideBar = () => {
    if (open) {
      setValue(-100);
      setOpen(false);
      return;
    }

    setValue(0);
    setOpen(true);
  };

  useEffect(() => {
    window.addEventListener("scroll",()=>{
      if(window.pageYOffset >= 100) {
        setBackgroundColor("#000000")
      }
      else {
        setBackgroundColor("none")
      }
    })
  },[]);

  
  return (
    <div class="header" style={{background:backgroundColor,alignItems:"center",transition: "ease-in-out 0.4s"}}>
      <div className="out_sidebar_container">
        <FormatAlignJustifyIcon
          className="icon"
          style={{ fontSize: 40 }}
          onClick={sideBar}
        />

        <Sidebar value={value} />
      </div>
      <h2 style={{ marginLeft: "20px",color:(backgroundColor == "none")?"#000":"#fff"}}>TRL</h2>
      <div class="nav">
        <ul class="nav-links">
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
          style={{ fontSize: 20, padding: "5px 10px" }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Header;
