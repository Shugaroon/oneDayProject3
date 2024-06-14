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
      <h2>Create Project</h2>
      <label>
        Project Name:
        <input
          type="text"
          value={projectName}
          onChange={e => setProjectName(e.target.value)}
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
