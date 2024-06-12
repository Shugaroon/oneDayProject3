import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../css/EventForm.css";

const EventForm = ({ onSave, onCancel, isMultiDay }) => {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [color, setColor] = useState("#3498db");

  const handleSubmit = e => {
    e.preventDefault();
    const start = new Date(startDate);
    start.setHours(parseInt(startTime.split(":")[0], 10));
    start.setMinutes(parseInt(startTime.split(":")[1], 10));

    let end;
    if (isMultiDay) {
      end = new Date(endDate);
    } else {
      end = new Date(startDate);
    }
    end.setHours(parseInt(endTime.split(":")[0], 10));
    end.setMinutes(parseInt(endTime.split(":")[1], 10));

    onSave({
      title,
      start: start,
      end: end,
      allDay: false,
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
      <div className="form-group">
        <label>
          Date:
          <DatePicker
            selected={startDate}
            onChange={date => {
              setStartDate(date);
              if (!isMultiDay) setEndDate(date);
            }}
            dateFormat="yyyy-MM-dd"
            required
          />
        </label>
        <label>
          Start Time:
          <input
            type="time"
            value={startTime}
            onChange={e => setStartTime(e.target.value)}
            required
          />
        </label>
        {!isMultiDay && (
          <label>
            End Time:
            <input
              type="time"
              value={endTime}
              onChange={e => setEndTime(e.target.value)}
              required
            />
          </label>
        )}
      </div>
      {isMultiDay && (
        <div className="form-group">
          <label>
            End Date:
            <DatePicker
              selected={endDate}
              onChange={date => setEndDate(date)}
              dateFormat="yyyy-MM-dd"
              required
            />
          </label>
          <label>
            End Time:
            <input
              type="time"
              value={endTime}
              onChange={e => setEndTime(e.target.value)}
              required
            />
          </label>
        </div>
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
