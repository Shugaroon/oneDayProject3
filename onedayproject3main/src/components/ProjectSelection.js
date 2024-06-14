import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/ProjectSelection.css";

const ProjectSelection = ({ projects, onAddProject }) => {
  const navigate = useNavigate();

  const handleSelectProject = projectId => {
    navigate(`/calendar/${projectId}`);
  };

  return (
    <div className="project-selection">
      <div className="project-card" onClick={onAddProject}>
        <div className="plus-icon">+</div>
      </div>
      {projects.map(project => (
        <div
          key={project.id}
          className="project-card"
          onClick={() => handleSelectProject(project.id)}
        >
          <div className="project-info">
            <h3>{project.title}</h3>
            <p>edited {project.edited.toLocaleString()}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectSelection;
