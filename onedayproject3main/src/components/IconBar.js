import React, { useRef, useState } from "react";
import "../css/IconBar.css";

const IconBar = ({ toggleSidebar, openThemeModal }) => {
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [modal3Open, setModal3Open] = useState(false);
  const [modal4Open, setModal4Open] = useState(false);
  const [modal5Open, setModal5Open] = useState(false);
  const themeIconRef = useRef(null);
  return (
    <div className="icon-bar">
      <button className="hamburger-button" onClick={toggleSidebar}>
        &#9776;
      </button>
      <div
        className="icon icon1"
        onMouseOver={() => setModal1Open(true)}
        onMouseOut={() => setModal1Open(false)}
      >
        🏠
      </div>
      <span className={`icon-modal ${modal1Open ? "show" : "hide"}`}>HOME</span>
      <div
        className="icon icon2"
        onMouseOver={() => setModal2Open(true)}
        onMouseOut={() => setModal2Open(false)}
      >
        📅
      </div>
      <span className={`icon-modal ${modal2Open ? "show" : "hide"}`}>
        CALENDER
      </span>
      <div
        className="icon icon3"
        onMouseOver={() => setModal3Open(true)}
        onMouseOut={() => setModal3Open(false)}
      >
        💬
      </div>
      <span className={`icon-modal ${modal3Open ? "show" : "hide"}`}>CHAT</span>
      <div
        className="icon icon4"
        onMouseOver={() => setModal4Open(true)}
        onMouseOut={() => setModal4Open(false)}
      >
        ⚙️
      </div>
      <span className={`icon-modal ${modal4Open ? "show" : "hide"}`}>
        SETTING
      </span>
      <div
        className="icon"
        ref={themeIconRef}
        onClick={() => openThemeModal(themeIconRef)}
        onMouseOver={() => setModal5Open(true)}
        onMouseOut={() => setModal5Open(false)}
      >
        🎨
      </div>
      <span className={`icon-modal ${modal5Open ? "show" : "hide"}`}>
        PALETTE
      </span>
    </div>
  );
};

export default IconBar;
