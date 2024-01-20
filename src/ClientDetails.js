import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import AddAppointmentForm from './AddAppointmentForm';

const ClientDetails = () => {
  const { id } = useParams();
  const { data: client, error, isPending } = useFetch('http://localhost:8000/clients/' + id);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    if (client && Array.isArray(client.appointments)) {
      setAppointments(client.appointments);
    }
  }, [client]);

  const handleAddAppointmentClick = (newAppointment) => {
    // Validate if the appointment is an array before updating the state
    if (Array.isArray(appointments)) {
      setAppointments([...appointments, newAppointment]);
    } else {
      console.error('Appointments is not an array');
    }

    // Make a request to the server to add the appointment
    fetch(`http://localhost:8000/clients/${id}/appointments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newAppointment),
    })
      .then((res) => {
        if (!res.ok) {
          throw Error('Could not add the appointment');
        }
        return res.json();
      })
      .then((data) => {
        console.log('Appointment added successfully:', data);
      })
      .catch((err) => {
        console.error('Error adding appointment:', err.message);
      });
  };

  return (
    <div className="client-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {client && (
        <div>
          <h2>{client.name}</h2>
          <h3>Appointments</h3>
          {appointments.map((appointment, index) => (
            <div key={index}>
              {appointment.date && <p>Date: {appointment.date}</p>}
              {appointment.time && <p>Time: {appointment.time}</p>}
            </div>
          ))}
          <AddAppointmentForm onAddAppointmentClick={handleAddAppointmentClick} />
        </div>
      )}
    </div>
  );
};

export default ClientDetails;
