import React, { useRef } from "react";
import "../css/IconBar.css";

const IconBar = ({ toggleSidebar, openThemeModal }) => {
  const themeIconRef = useRef(null);

  return (
    <div className="icon-bar">
      <button className="hamburger-button" onClick={toggleSidebar}>
        &#9776;
      </button>
      <div className="icon">🏠</div>
      <div className="icon">📅</div>
      <div className="icon">💬</div>
      <div className="icon">⚙️</div>
      <div
        className="icon"
        ref={themeIconRef}
        onClick={() => openThemeModal(themeIconRef)}
      >
        🎨
      </div>
    </div>
  );
};

export default IconBar;
