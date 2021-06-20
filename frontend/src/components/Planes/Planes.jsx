import React from "react";
import "./planes.css";
function Planes() {
  return (
    <div className="planes_main_container">
      <div className="planes_container">
        <div className="first_plane fp">
          <img className="planes_images" src={"	https://www.myvestige.com/images/001.jpg"} />
          <div className="plane_about">
            <h3>Monthely Scheme</h3>
            <p>Click here the latest monthely schema and special offers</p>
          </div>
        </div>
        <div className="seond_plane first_plane">
          <img className="planes_images" src={"	https://www.myvestige.com/images/004.jpg"} />
          <div className="plane_about">
            <h3>What's New</h3>
            <p>Check out company's latest updates.</p>
          </div>
        </div>
        <div className="third_palne first_plane">
          <img className="planes_images" src={"	https://www.myvestige.com/images/002.jpg"}/>
          <div className="plane_about">
            <h3>Our Events</h3>
            <p>Explore Our Events Click Here</p>
          </div>
        </div>
        <div className="fourth_plane first_plane">
          <img className="planes_images" src={"	https://www.myvestige.com/images/003.jpg"}/>
          <div className="plane_about">
            <h3>Car Achievers</h3>
            <p>To those who know the way, Show the way and Go the way.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Planes;
