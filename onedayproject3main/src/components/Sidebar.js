import React from "react";
import { Link } from "react-router-dom"; // 링크 추가
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
            <Link to="/out" className="submenu-item upcoming">
              📅 Upcoming <span className="badge">5</span>
            </Link>
            <Link to="/out" className="submenu-item important">
              🚨 Important
            </Link>
            <Link to="/out" className="submenu-item notification">
              🔔 Notification
            </Link>
            <Link to="/out" className="submenu-item event">
              🎉 Event
            </Link>
          </div>
        </div>
        <div className="menu-container">
          <div className="menu-item">Community</div>
          <div className="submenu">
            <Link to="/out" className="submenu-item chat">
              💬 Chat
            </Link>
            <Link to="/out" className="submenu-item member">
              👥 Members
            </Link>
          </div>
        </div>

        <div className="menu-container">
          <Link to="/out" className="menu-item theme">
            🎨 Theme
          </Link>
          <Link to="/out" className="menu-item setting">
            ⚙️ Settings
          </Link>
          <Link to="/login" className="menu-item logout">
            🚪 Log out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
