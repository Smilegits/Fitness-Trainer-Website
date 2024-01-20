import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarView = ({ appointments }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="calendar-view">
      <h2>Calendar View</h2>
      <Calendar onChange={handleDateChange} value={selectedDate} />
      <h3>Appointments on {selectedDate.toDateString()}</h3>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            {appointment.date && <p>Date: {appointment.date}</p>}
            {appointment.time && <p>Time: {appointment.time}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalendarView;
