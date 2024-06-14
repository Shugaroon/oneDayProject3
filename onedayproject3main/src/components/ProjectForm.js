import React, { useState } from "react";
import "../css/ProjectForm.css";

const ProjectForm = ({ onSave, onCancel }) => {
  const [projectName, setProjectName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    onSave({ name: projectName });
  };

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <p>Create Project</p>
      <label>
        <input
          type="text"
          placeholder="projectName"
          onChange={e => setProjectName(e.target.value)}
          required
        />
      </label>
      <div className="form-actions">
        <button type="submit">Create</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ProjectForm;
