// import { Link} from 'react-router-dom';

// const Navbar = () => {
//     return ( 
//         <nav className="navbar">
//             <h1>The Fitness Trainer Website</h1>
//             <div className="links">
//                 <Link to="/">Home</Link>
//                 <Link to="/create" style={{
//                     color:"white",
//                     backgroundColor:"#f1356d",
//                     borderRadius:'8px'
//                 }}>New Client</Link>
//             </div>
//         </nav>
//      );
// }
 
// export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import CalendarView from './CalendarView'; // Adjust the path accordingly

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Fitness Trainer Website</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: '8px'
                }}>New Client</Link>
                <Link to="/calendar">Calendar</Link>
            </div>
        </nav>
    );
}

export default Navbar;

