import React from "react";
import "../css/ViewModeButtons.css";

const ViewModeButtons = ({ onView, view }) => {
  return (
    <div className="view-mode-buttons">
      <button
        className={view === "day" ? "active" : ""}
        onClick={() => onView("day")}
      >
        Day
      </button>
      <button
        className={view === "week" ? "active" : ""}
        onClick={() => onView("week")}
      >
        Week
      </button>
      <button
        className={view === "month" ? "active" : ""}
        onClick={() => onView("month")}
      >
        Month
      </button>
    </div>
  );
};

export default ViewModeButtons;
