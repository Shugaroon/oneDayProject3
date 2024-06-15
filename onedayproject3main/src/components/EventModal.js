import React, { useState, useEffect } from "react";
import "../css/EventModal.css"; // 새로운 CSS 파일 가져오기

const EventModal = ({ isOpen, onClose, event, onSave, onDelete }) => {
  const [title, setTitle] = useState(event.title);
  const [start, setStart] = useState(event.start);
  const [end, setEnd] = useState(event.end);
  const [memo, setMemo] = useState(event.memo || "");

  useEffect(() => {
    setTitle(event.title);
    setStart(event.start);
    setEnd(event.end);
    setMemo(event.memo || "");
  }, [event]);

  const formatDate = date => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    const hours = String(d.getHours()).padStart(2, "0");
    const minutes = String(d.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  const handleSave = () => {
    onSave({ ...event, title, start, end, memo });
    onClose();
  };

  return (
    isOpen && (
      <div className="event-modal-overlay">
        <div className="event-modal">
          <h2>Edit Event</h2>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </label>
          <label>
            Start:
            <input
              type="datetime-local"
              value={formatDate(start)}
              onChange={e => setStart(new Date(e.target.value))}
            />
          </label>
          <label>
            End:
            <input
              type="datetime-local"
              value={formatDate(end)}
              onChange={e => setEnd(new Date(e.target.value))}
            />
          </label>
          <label>
            Memo:
            <textarea value={memo} onChange={e => setMemo(e.target.value)} />
          </label>
          <div className="modal-buttons">
            <button onClick={handleSave}>Save</button>
            <button onClick={() => onDelete(event.id)}>Delete</button>
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    )
  );
};

export default EventModal;
