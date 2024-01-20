
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Create from './Create';
import CalendarView from './CalendarView'; // Check and adjust the path accordingly
import NotFound from './NotFound';
import Navbar from './Navbar';

const App = () => {
  const appointmentsData = [
    {
      date: '2024-01-23',
      time: '1:00 PM',
      // Add other appointment properties
    },
    // Add more appointments as needed
  ];

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/calendar">
              <CalendarView appointments={appointmentsData} />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;




