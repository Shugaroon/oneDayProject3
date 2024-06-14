import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../css/EventForm.css";

const EventForm = ({ onSave, onCancel, isMultiDay, onImportantSet }) => {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [color, setColor] = useState("#D5E7EF");
  //팔레트 토글 부분
  const [showPalette, setShowPalette] = useState(false);
  const togglePalette = () => {
    setShowPalette(!showPalette);
  };

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
      {/* <h2>Add Event</h2> */}
      <div className="event-form-title">
        <div className="event-form-topic-wrapper">
          <input
            type="text"
            value={title}
            placeholder="Enter Topic"
            onChange={e => setTitle(e.target.value)}
            required
          />
          <div
            onClick={togglePalette}
            className="color-palette-button"
            style={{ backgroundColor: color }}
          />
        </div>
        {showPalette && (
          <div className="color-palette">
            {["#D5E7EF ", "#FFF500", "#E1FB36", "#f1c40f"].map(paletteColor => (
              <span
                key={paletteColor}
                className={`color-swatch ${
                  color === paletteColor ? "selected" : ""
                }`}
                style={{ backgroundColor: paletteColor }}
                onClick={() => {
                  setColor(paletteColor);
                  setShowPalette(false); //선택 시 팝업 닫음
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* add event singleday part--------------------------------------------- */}
      {!isMultiDay && (
        <div className="form-group">
          <div className="date-form">
            <svg
              className="date-form-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 24 29"
              fill="none"
            >
              <path
                d="M7.11111 1V6M16.8889 1V6M1 11H23M3.44444 3.5H20.5556C21.9056 3.5 23 4.61929 23 6V23.5C23 24.8807 21.9056 26 20.5556 26H3.44444C2.09441 26 1 24.8807 1 23.5V6C1 4.61929 2.09441 3.5 3.44444 3.5Z"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <DatePicker
              className="date-picker"
              selected={startDate}
              onChange={date => {
                setStartDate(date);
                if (!isMultiDay) setEndDate(date);
              }}
              dateFormat="yyyy-MM-dd"
              required
            />
          </div>
          <div>Set Time</div>
          <div className="time-form-group">
            <div className="time-from-start">
              <input
                type="time"
                value={startTime}
                onChange={e => setStartTime(e.target.value)}
                required
              />
            </div>
            <div className="time-from-end">
              <input
                type="time"
                value={endTime}
                onChange={e => setEndTime(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
      )}

      {/* add event multiday part--------------------------------------------- */}
      {isMultiDay && (
        <div className="form-group-multiday">
          <div className="form-start-multiday">
            <label>
              Start Event
              <DatePicker
                className="date-picker"
                selected={startDate}
                onChange={date => {
                  setStartDate(date);
                  if (!isMultiDay) setEndDate(date);
                }}
                dateFormat="yyyy-MM-dd"
                required
              />
              <input
                type="time"
                value={startTime}
                onChange={e => setStartTime(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="form-end-multiday">
            <label>
              End Event
              <DatePicker
                selected={endDate}
                onChange={date => setEndDate(date)}
                dateFormat="yyyy-MM-dd"
                required
              />
              <input
                type="time"
                value={endTime}
                onChange={e => setEndTime(e.target.value)}
                required
              />
            </label>
          </div>
        </div>
      )}

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
