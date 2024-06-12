import React from "react";
import "../css/Header.css";

import profile1 from "./img/profile1.jpg";
import profile2 from "./img/profile2.jpg";
import profile3 from "./img/profile3.jpg";
import myProfile from "./img/myProfile.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="team-profiles">
        <img src={profile1} alt="Profile 1" className="profile-pic" />
        <img src={profile2} alt="Profile 2" className="profile-pic" />
        <img src={profile3} alt="Profile 3" className="profile-pic" />
        <div className="more-profiles">+5</div>
      </div>
      <div className="my-profile">
        <span className="username">unknown</span>
        <img src={myProfile} alt="My Profile" className="profile-pic" />
      </div>
    </div>
  );
};

export default Header;
