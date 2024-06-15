import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";
import profile1 from "./img/profile1.jpg";
import profile2 from "./img/profile2.jpg";
import profile3 from "./img/profile3.jpg";
import myProfile from "./img/myProfile.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="left-container">
        <Link to="/" className="home-link">
          <span className="home-text">TEAM KOK</span>
        </Link>
      </div>
      <div className="right-container">
        <img src={profile1} alt="Profile 1" className="profile-pic profile1" />
        <img src={profile2} alt="Profile 2" className="profile-pic profile2" />
        <img src={profile3} alt="Profile 3" className="profile-pic profile3" />
        <div className="more-profiles">+5</div>
        <div className="user-wrapper">
          <img src={myProfile} alt="My Profile" className="profile-pic" />
          <div className="username">user</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
