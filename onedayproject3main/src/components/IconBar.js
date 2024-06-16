import React, { useRef, useState } from "react";
import { Link } from "react-router-dom"; // 링크 추가
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
      <Link
        to="/"
        className="icon icon1"
        onMouseOver={() => setModal1Open(true)}
        onMouseOut={() => setModal1Open(false)}
      >
        🏠
      </Link>
      <span className={`icon-modal ${modal1Open ? "show" : "hide"}`}>HOME</span>
      <Link
        to="/out"
        className="icon icon2"
        onMouseOver={() => setModal2Open(true)}
        onMouseOut={() => setModal2Open(false)}
      >
        📅
      </Link>
      <span className={`icon-modal ${modal2Open ? "show" : "hide"}`}>
        CALENDER
      </span>
      <Link
        to="/out"
        className="icon icon3"
        onMouseOver={() => setModal3Open(true)}
        onMouseOut={() => setModal3Open(false)}
      >
        💬
      </Link>
      <span className={`icon-modal ${modal3Open ? "show" : "hide"}`}>CHAT</span>
      <Link
        to="/out"
        className="icon icon4"
        onMouseOver={() => setModal4Open(true)}
        onMouseOut={() => setModal4Open(false)}
      >
        ⚙️
      </Link>
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
