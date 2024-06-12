import React, { useState } from "react";
import "../css/EventForm.css";

const EventForm = ({ onSave, onCancel, isMultiDay }) => {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [color, setColor] = useState("#3498db"); // 기본 색상

  const handleSubmit = e => {
    e.preventDefault();
    onSave({
      title,
      start: new Date(startDate),
      end: new Date(isMultiDay ? endDate : startDate), // Use startDate for end if not multi-day
      allDay: !isMultiDay,
      color: color,
    });
  };

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <h2>Add Event</h2>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
      </label>
      <label>
        Start Date:
        <input
          type="datetime-local"
          value={startDate}
          onChange={e => setStartDate(e.target.value)}
          required
        />
      </label>
      {isMultiDay && (
        <label>
          End Date:
          <input
            type="datetime-local"
            value={endDate}
            onChange={e => setEndDate(e.target.value)}
            required
          />
        </label>
      )}
      <label>
        Color:
        <div className="color-palette">
          {["#3498db", "#2ecc71", "#f1c40f"].map(paletteColor => (
            <span
              key={paletteColor}
              className={`color-swatch ${
                color === paletteColor ? "selected" : ""
              }`}
              style={{ backgroundColor: paletteColor }}
              onClick={() => setColor(paletteColor)}
            />
          ))}
        </div>
      </label>
      <div className="form-actions">
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EventForm;
