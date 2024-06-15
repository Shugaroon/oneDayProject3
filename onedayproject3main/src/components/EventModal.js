import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import EventForm from "./EventForm";

const EventModal = ({ isOpen, onClose, event, onSave, onDelete }) => {
  const [eventData, setEventData] = useState(event);

  useEffect(() => {
    setEventData(event);
  }, [event]);

  const handleChange = e => {
    const { name, value } = e.target;
    setEventData(prevEvent => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(eventData);
    onClose();
  };

  const handleDelete = () => {
    onDelete(eventData.id);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="event-modal-content">
        <h2>Edit Event</h2>
        <div>
          <label>Topic:</label>
          <input
            type="text"
            name="title"
            value={eventData.title || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Start Date and Time:</label>
          <input
            type="datetime-local"
            name="start"
            value={eventData.start || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>End Date and Time:</label>
          <input
            type="datetime-local"
            name="end"
            value={eventData.end || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Memo:</label>
          <textarea
            name="memo"
            value={eventData.memo || ""}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Close</button>
        <button onClick={handleDelete} style={{ backgroundColor: "red" }}>
          Delete
        </button>
      </div>
    </Modal>
  );
};

export default EventModal;
