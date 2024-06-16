import React, { useState, useEffect, useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
  useLocation,
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
import ThemeModal from "./components/ThemeModal";
import EventModal from "./components/EventModal"; // EventModal 추가
import LoginPage from "./components/LoginPage"; // LoginPage 추가
import SignUpPage from "./components/SignUpPage"; // SignUpPage 추가
import "./App.css";
import OutOfService from "./components/OutOfService";

const App = () => {
  const themes = {
    Default: "#003cff",
    Dark: "#333",
    Green: "#4CAF50",
  };

  const savedThemeColor = localStorage.getItem("themeColor") || themes.Default;

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState("month");
  const [events, setEvents] = useState([]);
  const [projects, setProjects] = useState([]);
  const [showAddEventModal, setShowAddEventModal] = useState(false);
  const [showAddProjectModal, setShowAddProjectModal] = useState(false);
  const [showThemeModal, setShowThemeModal] = useState(false);
  const [themeColor, setThemeColor] = useState(savedThemeColor);
  const [isMultiDay, setIsMultiDay] = useState(false);
  const [themeModalAnchor, setThemeModalAnchor] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null); // 여기 추가
  const [isImportant, setIsImportant] = useState(false); // 여기 추가

  const updateElementStyles = useCallback(() => {
    const elements = document.querySelectorAll(
      ".add-event-button, .view-mode-buttons button, .more-profiles, .badge, .dropdown"
    );
    elements.forEach(element => {
      if (element.classList.contains("dropdown")) {
        element.style.borderBottomColor = themeColor;
      } else if (element.classList.contains("active")) {
        element.style.backgroundColor = themeColor;
        element.style.color = "white";
      } else if (element.classList.contains("view-mode-button")) {
        element.style.backgroundColor = "white";
        element.style.color = "black";
      } else {
        element.style.backgroundColor = themeColor;
      }
    });
  }, [themeColor]);

  useEffect(() => {
    document.body.style.backgroundColor = themeColor;
    updateElementStyles();
  }, [themeColor, updateElementStyles]);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  const handleNavigate = newDate => {
    setDate(newDate);
  };

  const handleViewChange = newView => {
    setView(newView);
    setTimeout(() => {
      updateElementStyles();
    }, 0);
  };

  const handleAddEvent = () => {
    setShowAddEventModal(true);
  };

  const handleSaveEvent = (event, projectId) => {
    const newEvent = {
      ...event,
      projectId,
      id: uuidv4(),
      color: isImportant ? "red" : event.color, // 여기 수정
    }; // 고유 ID 추가
    setEvents([...events, newEvent]);
    setShowAddEventModal(false);
    setIsImportant(false); // 여기 추가
  };

  const handleUpdateEvent = updatedEvent => {
    setEvents(
      events.map(event => (event.id === updatedEvent.id ? updatedEvent : event))
    );
  };

  const handleDeleteEvent = eventId => {
    setEvents(events.filter(event => event.id !== eventId));
    setSelectedEvent(null);
  };

  const handleEventSelect = event => {
    setSelectedEvent(event);
  };

  const handleAddProject = () => {
    setShowAddProjectModal(true);
  };

  const handleSaveProject = project => {
    const newProject = { ...project, id: uuidv4(), events: [] };
    setProjects([...projects, newProject]);
    setShowAddProjectModal(false);
  };

  const openThemeModal = themeIconRef => {
    setThemeModalAnchor(themeIconRef);
    setShowThemeModal(true);
  };

  const closeThemeModal = () => {
    setShowThemeModal(false);
  };

  const selectTheme = color => {
    setThemeColor(color);
    localStorage.setItem("themeColor", color); // 로컬 스토리지에 저장
    closeThemeModal();
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage themeColor={themeColor} />} />
        {/* LoginPage 경로 추가 */}
        <Route
          path="/signup"
          element={<SignUpPage themeColor={themeColor} />}
        />
        {/* SignUpPage 경로 추가 */}
        <Route path="/out" element={<OutOfService />} />
        {/* OutofService 경로 추가 */}
        <Route
          path="*"
          element={
            <AppContent
              sidebarOpen={sidebarOpen}
              toggleSidebar={toggleSidebar}
              themeColor={themeColor}
              date={date}
              view={view}
              handleNavigate={handleNavigate}
              handleViewChange={handleViewChange}
              handleAddEvent={handleAddEvent}
              events={events}
              projects={projects}
              handleAddProject={handleAddProject}
              showAddEventModal={showAddEventModal}
              setShowAddEventModal={setShowAddEventModal}
              showAddProjectModal={showAddProjectModal}
              setShowAddProjectModal={setShowAddProjectModal}
              showThemeModal={showThemeModal}
              openThemeModal={openThemeModal}
              closeThemeModal={closeThemeModal}
              selectTheme={selectTheme}
              handleSaveEvent={handleSaveEvent}
              handleSaveProject={handleSaveProject}
              isMultiDay={isMultiDay}
              setIsMultiDay={setIsMultiDay}
              themeModalAnchor={themeModalAnchor}
              selectedEvent={selectedEvent}
              setSelectedEvent={setSelectedEvent}
              handleEventSelect={handleEventSelect}
              handleUpdateEvent={handleUpdateEvent}
              handleDeleteEvent={handleDeleteEvent}
              isImportant={isImportant} // 여기 추가
              setIsImportant={setIsImportant} // 여기 추가
            />
          }
        />
      </Routes>
    </Router>
  );
};

const AppContent = ({
  sidebarOpen,
  toggleSidebar,
  themeColor,
  date,
  view,
  handleNavigate,
  handleViewChange,
  handleAddEvent,
  events,
  projects,
  handleAddProject,
  showAddEventModal,
  setShowAddEventModal,
  showAddProjectModal,
  setShowAddProjectModal,
  showThemeModal,
  openThemeModal,
  closeThemeModal,
  selectTheme,
  handleSaveEvent,
  handleSaveProject,
  isMultiDay,
  setIsMultiDay,
  themeModalAnchor,
  selectedEvent,
  setSelectedEvent,
  handleEventSelect,
  handleUpdateEvent,
  handleDeleteEvent,
  isImportant,
  setIsImportant,
}) => {
  const location = useLocation();

  useEffect(() => {
    const updateElementStyles = () => {
      const elements = document.querySelectorAll(
        ".add-event-button, .view-mode-buttons button, .more-profiles, .badge, .dropdown"
      );
      elements.forEach(element => {
        if (element.classList.contains("dropdown")) {
          element.style.borderBottomColor = themeColor;
        } else if (element.classList.contains("active")) {
          element.style.backgroundColor = themeColor;
          element.style.color = "white";
        } else if (element.classList.contains("view-mode-button")) {
          element.style.backgroundColor = "white";
          element.style.color = "black";
        } else {
          element.style.backgroundColor = themeColor;
        }
      });
    };

    updateElementStyles();
  }, [themeColor, location]);

  return (
    <div className="App" style={{ backgroundColor: themeColor }}>
      <div className={`container ${sidebarOpen ? "sidebar-open" : ""}`}>
        <div className="inner-container">
          <Header />
          <div className="main-content">
            <div
              className={`sidebar-container ${sidebarOpen ? "open" : "hidden"}`}
            >
              <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
            </div>
            <div
              className={`icon-bar-container ${
                sidebarOpen ? "hidden" : "open"
              }`}
            >
              <IconBar
                toggleSidebar={toggleSidebar}
                openThemeModal={openThemeModal}
              />
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
                    themeColor={themeColor}
                    handleEventSelect={handleEventSelect}
                    isImportant={isImportant} // 여기 추가
                    setIsImportant={setIsImportant} // 여기 추가
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
                      handleEventSelect={handleEventSelect}
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
        {showAddProjectModal && (
          <Modal
            isOpen={showAddProjectModal}
            onClose={() => setShowAddProjectModal(false)}
          >
            <ProjectForm
              onSave={handleSaveProject}
              onCancel={() => setShowAddProjectModal(false)}
              themeColor={themeColor}
            />
          </Modal>
        )}
      </div>
      {showAddProjectModal && (
        <Modal
          isOpen={showAddProjectModal}
          onClose={() => setShowAddProjectModal(false)}
        >
          <ProjectForm
            onSave={handleSaveProject}
            onCancel={() => setShowAddProjectModal(false)}
            themeColor={themeColor}
          />
        </Modal>
      )}
      {showThemeModal && (
        <ThemeModal
          isOpen={showThemeModal}
          onClose={closeThemeModal}
          selectTheme={selectTheme}
          anchorRef={themeModalAnchor}
        />
      )}
      {selectedEvent && (
        <EventModal
          isOpen={!!selectedEvent}
          onClose={() => setSelectedEvent(null)}
          event={selectedEvent}
          onSave={handleUpdateEvent}
          onDelete={handleDeleteEvent}
        />
      )}
    </div>
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
  isImportant,
  setIsImportant,
  themeColor,
}) => {
  return (
    showAddEventModal && (
      <Modal
        isOpen={showAddEventModal}
        onClose={() => {
          setShowAddEventModal(false);
          setIsImportant(false); // 모달 닫을 때 important 상태 초기화
        }}
      >
        <div className="event-type-selector">
          <button
            className={`important-btn ${isImportant ? "active" : ""}`} // 여기 수정
            type="button"
            onClick={() => setIsImportant(!isImportant)} // 여기 수정
          >
            🚨
          </button>
          <div className="event-type-btn-wrapper">
            <button
              className={!isMultiDay ? "active" : ""}
              style={
                !isMultiDay
                  ? { backgroundColor: themeColor }
                  : { backgroundColor: "white" }
              }
              onClick={() => setIsMultiDay(false)}
            >
              Single Day
            </button>
            <button
              className={isMultiDay ? "active" : ""}
              style={
                isMultiDay
                  ? { backgroundColor: themeColor }
                  : { backgroundColor: "white" }
              }
              onClick={() => setIsMultiDay(true)}
            >
              Multi Day
            </button>
          </div>
        </div>
        <EventForm
          isMultiDay={isMultiDay}
          onSave={event => handleSaveEvent(event, projectId)}
          onCancel={() => setShowAddEventModal(false)}
          themeColor={themeColor}
        />
      </Modal>
    )
  );
};

export default App;
