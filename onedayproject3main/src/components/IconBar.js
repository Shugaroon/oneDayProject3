import React from "react";
import "../css/IconBar.css";

const IconBar = ({ toggleSidebar, openThemeModal }) => {
  return (
    <div className="icon-bar">
      <button className="hamburger-button" onClick={toggleSidebar}>
        &#9776;
      </button>
      <div className="icon">🏠</div>
      <div className="icon">📅</div>
      <div className="icon">💬</div>
      <div className="icon">⚙️</div>
      <div className="icon" onClick={openThemeModal}>
        🎨
      </div>
    </div>
  );
};

export default IconBar;
