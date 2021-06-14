import React from "react";
import Sidebar from "./Sidebar";
import "./header.css";
import FormatAlignJustifyIcon from "@material-ui/icons/FormatAlignJustify";
function Header() {
  return (
    <div className="header_container">
      <div className="left_side_header">
        <FormatAlignJustifyIcon className="icon" />
        {/* <span class="material-icons">
reorder
</span> */}
      </div>

      <div className="midle_side_header">

          <ul className="midle_side_header_list">
              <li>Home </li>
              <li>Home </li>
              <li>Home </li>
              <li>Home </li>

          </ul>

      </div>
      <div className="right_side_header">
        <button> Login </button>
      </div>
    </div>
  );
}

export default Header;
