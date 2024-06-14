import React, { useEffect, useRef } from "react";
import "../css/ThemeModal.css";

const ThemeModal = ({ isOpen, onClose, selectTheme, anchorRef }) => {
  const modalRef = useRef();

  useEffect(() => {
    const updateModalPosition = () => {
      if (anchorRef.current && modalRef.current) {
        const anchorRect = anchorRef.current.getBoundingClientRect();
        const modal = modalRef.current;
        modal.style.top = `${anchorRect.top + window.scrollY - 46}px`;
        modal.style.left = `${anchorRect.right + window.scrollX + 17}px`;
      }
    };

    updateModalPosition();
    window.addEventListener("resize", updateModalPosition);
    return () => {
      window.removeEventListener("resize", updateModalPosition);
    };
  }, [anchorRef, isOpen]);

  if (!isOpen) return null;

  const themes = ["#003cff", "#333", "#4CAF50"];

  return (
    <div className="theme-modal" ref={modalRef} onClick={onClose}>
      {themes.map(color => (
        <div
          key={color}
          className="color-swatch"
          style={{ backgroundColor: color }}
          onClick={e => {
            e.stopPropagation();
            selectTheme(color);
          }}
        />
      ))}
    </div>
  );
};

export default ThemeModal;
