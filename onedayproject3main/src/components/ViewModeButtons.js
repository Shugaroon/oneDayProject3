import React, { useEffect } from "react";
import "../css/ViewModeButtons.css";

const ViewModeButtons = ({ onView, view, themeColor }) => {
  const handleViewChange = newView => {
    onView(newView);
  };

  useEffect(() => {
    const buttons = document.querySelectorAll(".view-mode-buttons button");
    buttons.forEach(button => {
      if (button.classList.contains("active")) {
        button.style.backgroundColor = themeColor;
        button.style.color = "white";
      } else {
        button.style.backgroundColor = "white";
        button.style.color = "black";
      }
    });
  }, [themeColor, view]);

  return (
    <div className="view-mode-buttons">
      <button
        className={`view-mode-button ${view === "day" ? "active" : ""}`}
        onClick={() => handleViewChange("day")}
      >
        Day
      </button>
      <button
        className={`view-mode-button ${view === "week" ? "active" : ""}`}
        onClick={() => handleViewChange("week")}
      >
        Week
      </button>
      <button
        className={`view-mode-button ${view === "month" ? "active" : ""}`}
        onClick={() => handleViewChange("month")}
      >
        Month
      </button>
    </div>
  );
};

export default ViewModeButtons;
