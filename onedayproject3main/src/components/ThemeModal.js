import React from "react";
import Modal from "./Modal";
import "../css/ThemeModal.css";

const ThemeModal = ({ isOpen, onClose, selectTheme }) => {
  const themes = [
    { name: "Default", color: "#003cff" },
    { name: "Dark", color: "#333" },
    { name: "Green", color: "#4CAF50" },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="theme-modal">
        <h2>원하는 테마!</h2>
        <div className="color-palette">
          {themes.map(theme => (
            <div
              key={theme.name}
              className="color-swatch"
              style={{ backgroundColor: theme.color }}
              onClick={() => selectTheme(theme.color)}
            >
              <span className="tooltip">{theme.name}</span>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default ThemeModal;
