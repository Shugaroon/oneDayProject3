import React from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import CalendarHeader from "./CalendarHeader";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../css/Calendar.css";

const localizer = momentLocalizer(moment);

const MyCalendar = ({ date, view, onNavigate, onView, onAddEvent, events }) => {
  const eventStyleGetter = event => {
    const isSingleDay = event.start.toDateString() === event.end.toDateString();
    const style = isSingleDay
      ? {
          backgroundColor: "transparent",
          color: "black",
          display: "flex",
          alignItems: "center",
        }
      : {
          backgroundColor: event.color,
          borderRadius: "4px",
          opacity: 0.8,
          color: "white",
          border: "0px",
          display: "block",
        };
    return {
      style: style,
    };
  };

  const EventComponent = ({ event }) => {
    if (event.start.toDateString() === event.end.toDateString()) {
      return (
        <span>
          <span
            style={{
              display: "inline-block",
              width: "10px",
              height: "10px",
              backgroundColor: event.color,
              borderRadius: "50%",
              marginRight: "5px",
            }}
          ></span>
          {event.title}
        </span>
      );
    } else {
      return <span>{event.title}</span>;
    }
  };

  return (
    <div className="my-calendar">
      <CalendarHeader
        date={date}
        view={view}
        onNavigate={onNavigate}
        onView={onView}
        onAddEvent={onAddEvent}
      />
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ flexGrow: 1 }}
        date={date}
        view={view}
        onNavigate={onNavigate}
        onView={onView}
        toolbar={false}
        views={["month", "week", "day"]}
        eventPropGetter={eventStyleGetter}
        components={{
          event: EventComponent,
        }}
      />
    </div>
  );
};

export default MyCalendar;
