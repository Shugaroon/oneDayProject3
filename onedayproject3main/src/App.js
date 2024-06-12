import { useState } from "react";
import MyCalendar from "./components/Calendar";
import Sidebar from "./components/Sidebar";
import IconBar from "./components/IconBar";
import Header from "./components/Header";
import Modal from "./components/Modal";
import EventForm from "./components/EventForm";
import "./App.css";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState("month");
  const [events, setEvents] = useState([
    {
      title: "테스트 일정",
      start: new Date(2024, 5, 6, 11, 0),
      end: new Date(2024, 5, 9, 15, 0),
      allDay: false,
      color: "#3498db",
    },
    {
      title: "테스트 2",
      start: new Date(2024, 5, 12, 9, 0),
      end: new Date(2024, 5, 12, 17, 0),
      allDay: false,
      color: "#e74c3c",
    },
  ]);
  const [showAddEventModal, setShowAddEventModal] = useState(false);
  const [isMultiDay, setIsMultiDay] = useState(false);

  const toggleSidebar = () => {
    if (sidebarOpen) {
      setSidebarOpen(false);
      setTimeout(() => {
        setSidebarOpen(false);
      }, 300);
    } else {
      setTimeout(() => {
        setSidebarOpen(true);
      }, 300);
    }
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

  const handleSaveEvent = event => {
    setEvents([...events, event]);
    setShowAddEventModal(false);
  };

  return (
    <div className="App">
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
              <IconBar toggleSidebar={toggleSidebar} />
            </div>
            <div
              className={`calendar-wrapper ${
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
          </div>
        </div>
      </div>
      {showAddEventModal && (
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
            onSave={handleSaveEvent}
            onCancel={() => setShowAddEventModal(false)}
          />
        </Modal>
      )}
    </div>
  );
};

export default App;
