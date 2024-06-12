import React, { useState } from "react";
import "../css/NavigationWithDropdown.css";

const NavigationWithDropdown = ({ date, onNavigate }) => {
  const [isMonthDropdownOpen, setIsMonthDropdownOpen] = useState(false);
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);

  const months = [...Array(12).keys()].map(i =>
    new Date(0, i).toLocaleString("en-US", { month: "long" })
  );
  const years = [...Array(11).keys()].map(
    i => new Date().getFullYear() - 5 + i
  );

  const handleSelectMonth = monthIndex => {
    const newDate = new Date(date.getFullYear(), monthIndex, 1);
    onNavigate(newDate);
    setIsMonthDropdownOpen(false);
  };

  const handleSelectYear = year => {
    const newDate = new Date(year, date.getMonth(), 1);
    onNavigate(newDate);
    setIsYearDropdownOpen(false);
  };

  const handleNavigate = direction => {
    const newDate = new Date(date);
    if (direction === "PREV") newDate.setMonth(newDate.getMonth() - 1);
    else if (direction === "NEXT") newDate.setMonth(newDate.getMonth() + 1);
    onNavigate(newDate);
  };

  return (
    <div className="navigation-with-dropdown">
      <button onClick={() => handleNavigate("PREV")}>&lt;</button>
      <div className="dropdown">
        <span onClick={() => setIsMonthDropdownOpen(!isMonthDropdownOpen)}>
          {months[date.getMonth()]}
        </span>
        {isMonthDropdownOpen && (
          <div className="dropdown-content">
            {months.map((month, index) => (
              <div key={index} onClick={() => handleSelectMonth(index)}>
                {month}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="dropdown">
        <span onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}>
          {date.getFullYear()}
        </span>
        {isYearDropdownOpen && (
          <div className="dropdown-content">
            {years.map(year => (
              <div key={year} onClick={() => handleSelectYear(year)}>
                {year}
              </div>
            ))}
          </div>
        )}
      </div>
      <button onClick={() => handleNavigate("NEXT")}>&gt;</button>
    </div>
  );
};

export default NavigationWithDropdown;
