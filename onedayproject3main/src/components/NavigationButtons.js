import React from "react";
import "../css/NavigationButtons.css";

const NavigationButtons = ({ date, view, onNavigate }) => {
  const handleNavigate = direction => {
    const newDate = new Date(date);

    if (view === "month") {
      if (direction === "PREV") {
        newDate.setMonth(newDate.getMonth() - 1);
      } else if (direction === "NEXT") {
        newDate.setMonth(newDate.getMonth() + 1);
      }
    } else if (view === "week") {
      if (direction === "PREV") {
        newDate.setDate(newDate.getDate() - 7);
      } else if (direction === "NEXT") {
        newDate.setDate(newDate.getDate() + 7);
      }
    } else if (view === "day") {
      if (direction === "PREV") {
        newDate.setDate(newDate.getDate() - 1);
      } else if (direction === "NEXT") {
        newDate.setDate(newDate.getDate() + 1);
      }
    }

    onNavigate(newDate);
  };

  const formatMonth = date => {
    const options = { month: "long", year: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };

  const formatWeek = date => {
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - date.getDay());
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    return `${startOfWeek.toLocaleDateString()} - ${endOfWeek.toLocaleDateString()}`;
  };

  const formatDay = date => {
    return date.toLocaleDateString();
  };

  const getTitle = () => {
    if (view === "month") {
      return formatMonth(date);
    } else if (view === "week") {
      return formatWeek(date);
    } else if (view === "day") {
      return formatDay(date);
    }
  };

  return (
    <div className="navigation-buttons">
      <button onClick={() => handleNavigate("PREV")}>&lt;</button>
      <span className="view-title">{getTitle()}</span>
      <button onClick={() => handleNavigate("NEXT")}>&gt;</button>
    </div>
  );
};

export default NavigationButtons;
