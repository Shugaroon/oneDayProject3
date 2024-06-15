import React from "react";
import NavigationWithDropdown from "./NavigationWithDropdown";
import NavigationButtons from "./NavigationButtons";
import ViewModeButtons from "./ViewModeButtons";
import "../css/CalendarHeader.css";

const CalendarHeader = ({ date, view, onNavigate, onView, onAddEvent }) => {
  return (
    <div className="calendar-header">
      <div className="left-container">
        {view === "month" ? (
          <NavigationWithDropdown date={date} onNavigate={onNavigate} />
        ) : (
          <NavigationButtons date={date} view={view} onNavigate={onNavigate} />
        )}
      </div>
      <div className="right-container">
        <ViewModeButtons onView={onView} view={view} />
        <button className="add-event-button" onClick={onAddEvent}>
          + add event
        </button>
      </div>
    </div>
  );
};

export default CalendarHeader;
