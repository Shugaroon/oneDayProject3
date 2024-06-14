import React from "react";
import "../css/Sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? "" : "hidden"}`}>
      <div className="sidebar-header">
        <span className="home-text"></span>
        <button className="hamburger-button" onClick={toggleSidebar}>
          &#9776;
        </button>
      </div>
      <input type="text" placeholder="Search" className="search-input" />
      <div className="menu">
        <div className="menu-item">Tasks</div>
        <div className="submenu">
          <div className="submenu-item">
            Upcoming <span className="badge">5</span>
          </div>
          <div className="submenu-item">Important</div>
          <div className="submenu-item">Notification</div>
          <div className="submenu-item">Event</div>
        </div>
        <div className="menu-item">Community</div>
        <div className="submenu">
          <div className="submenu-item">Chat</div>
          <div className="submenu-item">Members</div>
        </div>
        <div className="menu-item">Theme</div>
        <div className="menu-item">Settings</div>
        <div className="menu-item">Log out</div>
      </div>
    </div>
  );
};

export default Sidebar;
