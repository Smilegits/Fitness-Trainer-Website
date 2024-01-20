import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = ({ onAddClient }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [location, setLocation] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newClient = {
      firstName,
      lastName,
      location,
      appointments: [{ date: appointmentDate, time: appointmentTime }],
    };

    setIsPending(true);
    // Assuming your API endpoint for creating a new client is '/clients'
    fetch('http://localhost:8000/clients', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newClient),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('New client added:', data);
        setIsPending(false);
        // Call the onAddClient prop to update the clients state in the Home component
        onAddClient(data);
        history.push('/');
      })
      .catch((error) => {
        console.error('Error adding client:', error);
        setIsPending(false);
      });
  };

  return (
    <div className="create">
      <h2>Add a new Client</h2>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input type="text" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />

        <label>Last Name:</label>
        <input type="text" required value={lastName} onChange={(e) => setLastName(e.target.value)} />

        <label>Location:</label>
        <input type="text" required value={location} onChange={(e) => setLocation(e.target.value)} />

        <label>Appointment Date:</label>
        <input type="date" required value={appointmentDate} onChange={(e) => setAppointmentDate(e.target.value)} />

        <label>Appointment Time:</label>
        <input type="time" required value={appointmentTime} onChange={(e) => setAppointmentTime(e.target.value)} />

        {!isPending && <button>Add a Client</button>}
        {isPending && <button disabled>Adding Client....</button>}
      </form>
    </div>
  );
};

export default Create;
