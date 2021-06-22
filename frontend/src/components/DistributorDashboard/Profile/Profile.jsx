import React, { useState } from "react";
import "./profile.css";
import ProfileInfo from "./ProfileInfo";
import AccountDetails from "./AccountDetails";
function Profile() {
  return (
    <div className="profile_container">
      <ProfileInfo />
      <AccountDetails />
    </div>
  );
}

export default Profile;
