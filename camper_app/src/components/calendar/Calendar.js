import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.style.js";
// import moment from "moment";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import {
  DateInput,
  CenteredDiv,
  StyledHeader,
  StyledWrapper,
} from "./Calendar.style.js";
import plLocale from '@fullcalendar/core/locales/pl';
// import momentTimezonePlugin from "@fullcalendar/moment-timezone";


const events = [
  {
    title: "inny camper",
    allDay: true,
    start: new Date(2022, 6, 6),
    end: new Date(2022, 6, 13),
  },
  {
    title: "test",
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

  // Dane do podpięcia z bazą danych:
  let startDate = new Date(newEvent.start)
  let endDate = new Date(newEvent.end)
  let dailyRate = 300   // do pobrania z oferty konkretnego campera, musi byc typ: number

  console.log(startDate)
  console.log(endDate)

  //funkcja licząca:
  function rentalCost() {
      if (startDate != null && endDate != null) {
        const difference = endDate.getTime() - startDate.getTime()
        console.log(difference)

        const rentalDuration = Math.ceil(difference / (1000 * 3600 * 24))
        console.log(rentalDuration)

        const totalCost = rentalDuration * dailyRate
        console.log(totalCost)
        } 
  }
  rentalCost()
  
  
  return (
    <div className="Calendar">
      <StyledHeader>Kalendarz wypożyczeń campera</StyledHeader>
      <StyledWrapper>
        <FullCalendar
          locale={plLocale}
          plugins={[dayGridPlugin]}
          timeZone="Europe/Warsaw"
          initialView="dayGridMonth"
          events={allEvents}
          contentHeight={450}
        />
      </StyledWrapper>
      <CenteredDiv>
        <CenteredDiv>
          <DatePicker
            placeholderText="Data początkowa"
            selected={newEvent.start}
            onChange={(start) =>
              setNewEvent({
                ...newEvent,
                start,
              })
            }
          />
          <DatePicker
            placeholderText="Data końcowa"
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
          Zarezerwuj campera
        </button>
      </CenteredDiv>
    </div>
  );
}
