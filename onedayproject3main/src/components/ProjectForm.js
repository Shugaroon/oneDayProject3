import React, { useState } from "react";
import "../css/ProjectForm.css";

const ProjectForm = ({ onSave, onCancel }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    onSave({ title, edited: new Date() });
    setTitle("");
  };

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <h2>Create Project</h2>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
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

export default ProjectForm;
