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
  StyledButton,
  TotalPriceInfo,
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
    title: "camper zajety",
    start: new Date(2022, 6, 20),
    end: new Date(2022, 6, 23),
  },
];

export function Calendar({camper,user}) {
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
  });
  const [allEvents, setAllEvents] = useState(events);

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
  }

  let startDate = new Date(newEvent.start)
  let endDate = new Date(newEvent.end)
  let dailyRate = camper.price
  

  function isValidDate(d) {
    return d instanceof Date && !isNaN(d);
  }

  function rentalCost() {
      if (isValidDate(startDate) && isValidDate(endDate)) {
        console.log(startDate)
        console.log(endDate)
        const difference = endDate.getTime() - startDate.getTime()
        const rentalDuration = Math.ceil(difference / (1000 * 3600 * 24))
        console.log(rentalDuration)
        const totalCost = rentalDuration * dailyRate
        return `Cena wynajmu: ${totalCost} zł`
      }  
      return ''
  }
  const totalCost = rentalCost()
  return (
    <div className="Calendar">
      <StyledHeader>Kalendarz wypożyczeń campera</StyledHeader>
      <StyledWrapper>
        <FullCalendar
          nextDayThreshold={'00:00:00'}
          allDay={false}
          locale={plLocale}
          plugins={[dayGridPlugin]}
          timeZone="Europe/Warsaw"
          initialView="dayGridMonth"
          events={allEvents}
          contentHeight={450}
        />
      </StyledWrapper>
        {user && 
      <CenteredDiv>
        
        <CenteredDiv>
          <DatePicker
            placeholderText="Data początkowa"
            selected={newEvent.start}
            onChange={(start) =>
              setNewEvent({
                ...newEvent,
                start,
                title: 'Zajęty',
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
        <div id='costInfo'>
            <h3>{totalCost}</h3>
        </div>
        </CenteredDiv>

        <StyledButton
          style={{
            margin: "30px",
          }}
          onClick={handleAddEvent}
        >
          Zarezerwuj campera
        </StyledButton>

      </CenteredDiv>
      
        }
    </div>
  );
}
