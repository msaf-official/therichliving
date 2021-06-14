import React from "react";
import "./planes.css";
function Planes() {
  return (
    <div className="planes_main_container">
      <div className="planes_container">
        <div className="first_plane">
          <img className="planes_images" />
          <div className="plane_about">
            <h3>Monthely Scheme</h3>
            <p>Click here the latest monthely schema and special offers</p>
          </div>
        </div>
        <div className="seond_plane first_plane">
          <img className="planes_images" />
          <div className="plane_about">
            <h3>Monthely Scheme</h3>
            <p>Click here the latest monthely schema and special offers</p>
          </div>
        </div>
        <div className="third_palne first_plane">
          <img className="planes_images" />
          <div className="plane_about">
            <h3>Monthely Scheme</h3>
            <p>Click here the latest monthely schema and special offers</p>
          </div>
        </div>
        <div className="fourth_plane first_plane">
          <img className="planes_images" />
          <div className="plane_about">
            <h3>Monthely Scheme</h3>
            <p>Click here the latest monthely schema and special offers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Planes;
