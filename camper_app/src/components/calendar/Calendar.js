import React, { useState } from "react";
import {addReservation} from "../../api/booking/addReservation"
import DatePicker, { registerLocale } from "react-datepicker";
import pl from "date-fns/locale/pl";
import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.style.js";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import momentTimezonePlugin from "@fullcalendar/moment-timezone";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import {
  DateInput,
  CenteredDiv,
  StyledHeader,
  StyledWrapper,
  StyledButton,
} from "./Calendar.style.js";
import plLocale from "@fullcalendar/core/locales/pl";
registerLocale("pl", pl);

const events = [
  {
    title: "zajęty",
    start: "2022-06-10T09:00:00",
    end: "2022-06-13T13:00:00",
  
  },
  {
    title: "zajęty",
    start: "2022-06-14T09:00:00",
    end: "2022-06-18T01:00:00",
   
  },
];

export function Calendar({ camper, user }) {
  
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
  });
  const [allEvents, setAllEvents] = useState(events);


  function handleAddEvent() {
    const bookingResult = rentalCost();
    console.log(bookingResult[0],bookingResult[1]);
    addReservation(newEvent,bookingResult[0],bookingResult[1]).then(res=>{
      console.log('rezerwacja zatwierdzona');
      setAllEvents([...allEvents, newEvent]);


    })
    console.log(newEvent)
  }


  
  function rentalCost() {
    let dailyRate = camper.price;
    if (newEvent.start != null && newEvent.end != null) {
      const difference = newEvent.end - newEvent.start;
      const rentalDuration = Math.ceil(difference / (1000 * 3600 * 24));
      const totalCost = rentalDuration * dailyRate;
      return [totalCost, rentalDuration];
    }
  }


  return (
    <div className="Calendar">
      <StyledHeader>Kalendarz wypożyczeń campera</StyledHeader>
      <StyledWrapper>
        <FullCalendar
          locale={plLocale}
          plugins={[
            dayGridPlugin,
            momentTimezonePlugin,
            resourceTimelinePlugin,
          ]}
          timeZone="Europe/Moscow"
          displayEventTime={false}
          initialView="dayGridMonth"
          events={allEvents}
          contentHeight={450}
        />
      </StyledWrapper>
      {user && (
        <CenteredDiv>
          <CenteredDiv>
            <DatePicker
              locale="pl"
              placeholderText="Data początkowa"
              selected={newEvent.start}
              onChange={(start) => {
                setNewEvent({
                  ...newEvent,
                  start,
                  title: "zajęty",
                  camperid:camper.id,
                  owner:camper.useremail,
                  ownerid:camper.userid,
                  borrower:user.email,
                  borrowerid:user.id
                });
              }}
            />
            <DatePicker
              locale="pl"
              placeholderText="Data końcowa"
              selected={newEvent.end}
              onChange={(end) => {
                setNewEvent({
                  ...newEvent,
                  end,
                });
              }}
            />
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
      )}
    </div>
  );
}
