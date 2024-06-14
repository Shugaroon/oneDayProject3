import React, { useRef, useState, useReducer } from "react";
import "../css/IconBar.css";

// function reducer(state, action) {
//     switch (action.type) {
//         case "ICON1":
//             return "HOME";
//         case "ICON2":
//             return "CALENDER";
//         case "ICON3":
//             return "CHAT";
//         case "ICON4":
//             return "SETTING";
//     }
// } // React limits the number of renders to prevent an infinite loop.

const IconBar = ({ toggleSidebar, openThemeModal }) => {
    const [modal1Open, setModal1Open] = useState("");
    const [modal2Open, setModal2Open] = useState("");
    const [modal3Open, setModal3Open] = useState("");
    const [modal4Open, setModal4Open] = useState("");
    const themeIconRef = useRef(null);
    const onMouseOverIcon1 = () => {
        setModal1Open("HOME");
    };

    const onMouseOutIcon1 = () => {
        setModal1Open("");
    };

    const onMouseOverIcon2 = () => {
        setModal2Open("CALENDER");
    };

    const onMouseOutIcon2 = () => {
        setModal2Open("");
    };
    const onMouseOverIcon3 = () => {
        setModal3Open("CHAT");
    };

    const onMouseOutIcon3 = () => {
        setModal3Open("");
    };
    const onMouseOverIcon4 = () => {
        setModal4Open("SETTING");
    };

    const onMouseOutIcon4 = () => {
        setModal4Open("");
    };

    return (
        <div className="icon-bar">
            <button className="hamburger-button" onClick={toggleSidebar}>
                &#9776;
            </button>
            <div
                className="icon icon1"
                onMouseOver={onMouseOverIcon1}
                onMouseOut={onMouseOutIcon1}
            >
                🏠
            </div>
            <span className="icon-modal">{modal1Open}</span>
            <div
                className="icon icon2"
                onMouseOver={onMouseOverIcon2}
                onMouseOut={onMouseOutIcon2}
            >
                📅
            </div>
            <span className="icon-modal">{modal2Open}</span>
            <div
                className="icon icon3"
                onMouseOver={onMouseOverIcon3}
                onMouseOut={onMouseOutIcon3}
            >
                💬
            </div>
            <span className="icon-modal">{modal3Open}</span>
            <div
                className="icon icon4"
                onMouseOver={onMouseOverIcon4}
                onMouseOut={onMouseOutIcon4}
            >
                ⚙️
            </div>
            <span className="icon-modal">{modal4Open}</span>
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
