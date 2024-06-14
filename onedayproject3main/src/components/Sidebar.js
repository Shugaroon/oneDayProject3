import React from "react";
import "../css/Sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? "" : "hidden"}`}>
      <div className="sidebar-header">
        <span className="home-text"></span>
        <input type="text" placeholder="Search" className="search-input" />
        <button className="hamburger-button" onClick={toggleSidebar}>
          &#9776;
        </button>
      </div>

      <div className="menu">
        <div className="menu-container">
          <div className="menu-item">Tasks</div>
          <div className="submenu">
            <div className="submenu-item upcoming">
              📅 Upcoming <span className="badge">5</span>
            </div>
            <div className="submenu-item important">🚨 Important</div>
            <div className="submenu-item notification">🔔 Notification</div>
            <div className="submenu-item event">🎉 Event</div>
          </div>
        </div>
        <div className="menu-container">
          <div className="menu-item">Community</div>
          <div className="submenu">
            <div className="submenu-item chat">💬 Chat</div>
            <div className="submenu-item member">👥 Members</div>
          </div>
        </div>

        <div className="menu-container">
          <div className="menu-item theme">🎨 Theme</div>
          <div className="menu-item setting">⚙️ Settings</div>
          <div className="menu-item logout">🚪 Log out</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
