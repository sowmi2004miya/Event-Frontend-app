import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">💼 Event Manager</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/add-event">Add Event</Link>
        <Link to="/occasion">View Events</Link>
      </div>
    </nav>
  );
}

export default Navbar;
