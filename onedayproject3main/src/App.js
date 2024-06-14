import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import MyCalendar from "./components/Calendar";
import Sidebar from "./components/Sidebar";
import IconBar from "./components/IconBar";
import Header from "./components/Header";
import Modal from "./components/Modal";
import EventForm from "./components/EventForm";
import ProjectSelection from "./components/ProjectSelection";
import ProjectForm from "./components/ProjectForm";
import "./App.css";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState("month");
  const [events, setEvents] = useState([]);
  const [projects, setProjects] = useState([]);
  const [showAddEventModal, setShowAddEventModal] = useState(false);
  const [showAddProjectModal, setShowAddProjectModal] = useState(false);
  const [isMultiDay, setIsMultiDay] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  const handleNavigate = newDate => {
    setDate(newDate);
  };

  const handleViewChange = newView => {
    setView(newView);
  };

  const handleAddEvent = () => {
    setShowAddEventModal(true);
  };

  const handleSaveEvent = (event, projectId) => {
    setEvents([...events, { ...event, projectId }]);
    setShowAddEventModal(false);
  };

  const handleAddProject = () => {
    setShowAddProjectModal(true);
  };

  const handleSaveProject = project => {
    const newProject = { ...project, id: uuidv4(), events: [] };
    setProjects([...projects, newProject]);
    setShowAddProjectModal(false);
  };

  return (
    <Router>
      <div className="App">
        <div className={`container ${sidebarOpen ? "sidebar-open" : ""}`}>
          <div className="inner-container">
            <Header />
            <div className="main-content">
              <div
                className={`sidebar-container ${
                  sidebarOpen ? "open" : "hidden"
                }`}
              >
                <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
              </div>
              <div
                className={`icon-bar-container ${
                  sidebarOpen ? "hidden" : "open"
                }`}
              >
                <IconBar toggleSidebar={toggleSidebar} />
              </div>
              <Routes>
                <Route
                  path="/calendar/:projectId"
                  element={
                    <ProjectCalendarWrapper
                      date={date}
                      view={view}
                      onNavigate={handleNavigate}
                      onView={handleViewChange}
                      onAddEvent={handleAddEvent}
                      events={events}
                      handleSaveEvent={handleSaveEvent}
                      showAddEventModal={showAddEventModal}
                      setShowAddEventModal={setShowAddEventModal}
                      isMultiDay={isMultiDay}
                      setIsMultiDay={setIsMultiDay}
                    />
                  }
                />
                <Route
                  path="/calendar"
                  element={
                    <div
                      className={`content-wrapper calendar-content-wrapper ${
                        sidebarOpen ? "sidebar-open" : ""
                      }`}
                    >
                      <MyCalendar
                        date={date}
                        view={view}
                        onNavigate={handleNavigate}
                        onView={handleViewChange}
                        onAddEvent={handleAddEvent}
                        events={events}
                      />
                    </div>
                  }
                />
                <Route
                  path="/"
                  element={
                    <div
                      className={`content-wrapper project-content-wrapper ${
                        sidebarOpen ? "sidebar-open" : ""
                      }`}
                    >
                      <ProjectSelection
                        projects={projects}
                        onAddProject={handleAddProject}
                      />
                    </div>
                  }
                />
              </Routes>
            </div>
          </div>
        </div>
        {showAddProjectModal && (
          <Modal
            isOpen={showAddProjectModal}
            onClose={() => setShowAddProjectModal(false)}
          >
            <ProjectForm
              onSave={handleSaveProject}
              onCancel={() => setShowAddProjectModal(false)}
            />
          </Modal>
        )}
      </div>
    </Router>
  );
};

const ProjectCalendarWrapper = props => {
  const { projectId } = useParams();
  return (
    <div className="content-wrapper calendar-content-wrapper">
      <MyCalendar {...props} projectId={projectId} />
      <AddEventModal {...props} projectId={projectId} />
    </div>
  );
};

const AddEventModal = ({
  showAddEventModal,
  setShowAddEventModal,
  isMultiDay,
  setIsMultiDay,
  handleSaveEvent,
  projectId,
}) => {
  return (
    showAddEventModal && (
      <Modal
        isOpen={showAddEventModal}
        onClose={() => setShowAddEventModal(false)}
      >
        <div className="event-type-selector">
          <button
            className={!isMultiDay ? "active" : ""}
            onClick={() => setIsMultiDay(false)}
          >
            Single Day
          </button>
          <button
            className={isMultiDay ? "active" : ""}
            onClick={() => setIsMultiDay(true)}
          >
            Multi Day
          </button>
        </div>
        <EventForm
          isMultiDay={isMultiDay}
          onSave={event => handleSaveEvent(event, projectId)}
          onCancel={() => setShowAddEventModal(false)}
        />
      </Modal>
    )
  );
};

export default App;
