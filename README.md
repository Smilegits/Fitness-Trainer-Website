# Fitness-Trainer-Website
I have made the project that allows a fitness trainer to efficiently manage appointments for clients. The website should provide a user-friendly interface for the trainer to add, edit, and delete appointments, along with client details. Additionally, as a bonus (optional), implement a calendar view page in order for the fitness trainer to see all of her/his appointments.


AddAppointmentForm.js:
Description: This module defines a React component for a form that allows users to add a new appointment. It includes fields for selecting the date and time.
Key Features:
Uses the useState hook to manage form input state.
Implements basic form validation.
Calls a callback function (onAddAppointmentClick) when the form is submitted.

![image](https://github.com/Smilegits/Fitness-Trainer-Website/assets/107976466/6bd19fbc-b41b-4ded-be3a-ad252efad31e)

App.js:

Description: The main entry point for the React application. It sets up the routing using react-router-dom and defines routes for different views.
Key Features:
Imports components like Home, Create, CalendarView, NotFound, and Navbar.
Initializes a sample appointmentsData array (to be replaced with actual data).

CalendarView.js:

Description: This module defines a React component for displaying a calendar view. It shows a calendar component from react-calendar and lists appointments for the selected date.
Key Features:
Uses the useState hook to manage the selected date.
Renders a calendar and a list of appointments for the selected date.

![image](https://github.com/Smilegits/Fitness-Trainer-Website/assets/107976466/411fb4d8-51ca-45aa-9d58-7b34111d2f2f)

ClientDetails.js:

Description: This module displays details for a specific client, including their appointments. It also provides a form for adding new appointments.
Key Features:
Uses the useParams hook to extract the client ID from the URL.
Fetches client details and appointments using the useFetch hook.
Allows adding new appointments through the AddAppointmentForm 



ClientList.js:

Description: This module renders a list of clients. It allows users to click on a client to view details and potentially add appointments.
Key Features:
Maps through an array of clients and renders a preview for each.
Provides a button (commented out) to add appointments for a client.

Create.js:

Description: This module provides a form for creating a new client, including their initial appointment details.
Key Features:
Uses the useState hook to manage form input state.
Makes a POST request to the server to add a new client with appointment details.

![image](https://github.com/Smilegits/Fitness-Trainer-Website/assets/107976466/51a77674-eb8c-46c7-9845-394a38e471c4)


Home.js:

Description: The main landing page module that displays a list of all clients fetched from the server.
Key Features:
Uses the useFetch hook to fetch client data.
Renders the ClientList component with fetched client data.
Passes a callback function (onAddClient) to update the state when a new client is added.

![image](https://github.com/Smilegits/Fitness-Trainer-Website/assets/107976466/5efa6d4e-5ee0-4e38-9d91-dfe1b67c1b90)



Navbar.js:

Description: This module defines a navigation bar component that provides links to different views in the application.
Key Features:
Includes links to "Home," "New Client," and "Calendar" views
![image](https://github.com/Smilegits/Fitness-Trainer-Website/assets/107976466/71a6d7da-907f-4ae9-b230-34701ba7391a)




