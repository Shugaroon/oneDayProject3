import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/ProjectSelection.css";

const ProjectSelection = ({ projects, onAddProject }) => {
  const navigate = useNavigate();

  const handleProjectClick = projectId => {
    navigate(`/calendar/${projectId}`);
  };

  return (
    <div className="project-content-wrapper">
      <div className="project-card add-project-card" onClick={onAddProject}>
        + Add Project
      </div>
      {projects.map(project => (
        <div
          key={project.id}
          className="project-card"
          onClick={() => handleProjectClick(project.id)}
        >
          <div className="project-title">{project.name}</div>
        </div>
      ))}
    </div>
  );
};

export default ProjectSelection;
