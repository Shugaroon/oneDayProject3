import React, { useState } from "react";
import "../css/ProjectForm.css";
import sunflowerImage from "./img/createFormBackground.gif";

const ProjectForm = ({ onSave, onCancel, themeColor }) => {
  const [projectName, setProjectName] = useState("");
  const [isSpecialProject, setIsSpecialProject] = useState(false);
  const [isLoremChecked, setIsLoremChecked] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    onSave({ name: projectName, isSpecialProject, isLoremChecked });
  };

  return (
    <div className="project-modal">
      <form className="project-form" onSubmit={handleSubmit}>
        <div className="form-header">
          <p>Create New</p>
        </div>
        <div className="form-body">
          <div className="form-image">
            <img src={sunflowerImage} alt="Project" />
          </div>
          <div className="right-section">
            <div className="form-inputs">
              <div>
                <input
                  type="text"
                  placeholder="📝 Project name"
                  onChange={e => setProjectName(e.target.value)}
                  required
                />
              </div>
              <div className="add-people">
                <input type="text" placeholder="👥 Add people" />
              </div>
            </div>
            <div className="form-actions">
              <div className="checkbox-section">
                <label>
                  <input
                    type="checkbox"
                    checked={isSpecialProject}
                    onChange={() => setIsSpecialProject(!isSpecialProject)}
                  />
                  Group Project
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={isLoremChecked}
                    onChange={() => setIsLoremChecked(!isLoremChecked)}
                  />
                  Terms of Service
                </label>
              </div>
              <button
                type="submit"
                className="test"
                style={{ backgroundColor: themeColor }}
              >
                Create
              </button>
              <button type="button" onClick={onCancel}>
                Close
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
