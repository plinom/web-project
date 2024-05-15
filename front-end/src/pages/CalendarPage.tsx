import moment from 'moment'
import React, { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import Header from '../components/Header'

function MyCalendar() {
  const localizer = momentLocalizer(moment)
  const [eventsList, setEventsList] = useState([])

  function handleSelect({ start, end }) {
    const title = window.prompt('New Event name')
    if (title) {
      var newEvent = {
        start: start,
        end: end,
        title: title,
      }
      let updateEventsList = eventsList
      updateEventsList.push(newEvent)
      setEventsList(updateEventsList)
    }
  }

  return (
    <div>
      <Calendar
        selectable
        defaultView='week'
        defaultDate={new Date()}
        localizer={localizer}
        events={eventsList}
        startAccessor='start'
        endAccessor='end'
        style={{ height: 500 }}
        onSelectSlot={handleSelect}
      />
    </div>
  )
}

export const CalendarPage = () => {
  return (
    <div className=''>
      <Header />
      <MyCalendar />
    </div>
  )
}