import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.style.js";
import moment from "moment";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import {
  DateInput,
  CenteredDiv,
  StyledHeader,
  StyledWrapper,
} from "./Calendar.style.js";
// import momentTimezonePlugin from "@fullcalendar/moment-timezone";


const events = [
  {
    title: "inny camper",
    allDay: true,
    start: new Date(2022, 6, 0),
    end: new Date(2022, 6, 0),
  },
  {
    title: "camperVan",
    start: new Date(2022, 6, 7),
    end: new Date(2022, 6, 10),
  },
  {
    title: "camper zajety",
    start: new Date(2022, 6, 20),
    end: new Date(2022, 6, 23),
  },
];

export function Calendar() {
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
  });
  const [allEvents, setAllEvents] = useState(events);

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
  }
  console.log(newEvent);
  console.log(allEvents);
  return (
    <div className="Calendar">
      <StyledHeader>Kalendarz wypożyczeń campera</StyledHeader>
      <StyledWrapper>
        <FullCalendar
          plugins={[dayGridPlugin]}
          timeZone="Europe/Warsaw"
          initialView="dayGridMonth"
          events={allEvents}
        />
      </StyledWrapper>
      <CenteredDiv>
        <input
          type="text"
          placeholder="Add Title"
          style={{
            width: "20%",
            margin: "15px",
          }}
          value={newEvent.title}
          onChange={(e) =>
            setNewEvent({
              ...newEvent,
              title: e.target.value,
            })
          }
        />
        <CenteredDiv>
          <DatePicker
            placeholderText="Start Date"
            selected={newEvent.start}
            onChange={(start) =>
              setNewEvent({
                ...newEvent,
                start,
              })
            }
          />
          <DatePicker
            placeholderText="End Date"
            selected={newEvent.end}
            onChange={(end) =>
              setNewEvent({
                ...newEvent,
                end,
              })
            }
          />
        </CenteredDiv>
        <button
          style={{
            margin: "30px",
          }}
          onClick={handleAddEvent}
        >
          Add Event
        </button>
      </CenteredDiv>
    </div>
  );
}
