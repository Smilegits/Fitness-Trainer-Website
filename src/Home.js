

import React, { useState, useEffect } from 'react';
import BlogList from './ClientList';
import useFetch from './useFetch';
import Create from './Create';

const Home = () => {
  const { data: fetchedClients, isPending, error } = useFetch('http://localhost:8000/clients');
  const [clients, setClients] = useState([]);

  const handleAddClient = (newClient) => {
    setClients([...clients, newClient]);
  };

  useEffect(() => {
    // Fetch client data from the API and update state
  }, []); // Make sure to add any dependencies based on your actual logic

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading....</div>}
      {fetchedClients && <BlogList clients={fetchedClients} title="All Clients!" />}
      {/* Correct prop name: onAddClient */}
    
    </div>
  );
};

export default Home;



