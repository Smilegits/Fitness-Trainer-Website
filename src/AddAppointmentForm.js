
import React, { useState } from 'react';

const AddAppointmentForm = ({ onAddAppointmentClick }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate date and time (you may need more robust validation)
    if (!date || !time) {
      alert('Please enter both date and time.');
      return;
    }

    // Pass the new appointment to the parent component
    onAddAppointmentClick({ date, time });

    // Clear the form fields
    setDate('');
    setTime('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <label>
        Time:
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      </label>
      <button type="submit">Add Appointment</button>
    </form>
  );
};

export default AddAppointmentForm;
