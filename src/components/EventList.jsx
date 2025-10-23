// src/components/EventList.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function EventList() {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/events");
      setEvents(res.data);
    } catch (err) {
      console.error("Failed to fetch events", err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const deleteEvent = async (id) => {
    if (!window.confirm("Are you sure you want to delete this event?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/events/${id}`);
      fetchEvents();
    } catch (err) {
      console.error("Failed to delete event", err);
      alert("Failed to delete event");
    }
  };

  return (
    <div className="list-container">
      <h2>All Events</h2>
      <div className="event-grid">
        {events.map((e) => (
          <div key={e._id} className="event-card">
            <h3>{e.name}</h3>
            <p><strong>Date:</strong> {e.date}</p>
            <p><strong>Organiser:</strong> {e.organiser}</p>
            <p><strong>Location:</strong> {e.location}</p>
            <div className="action-row">
              <Link to={`/edit/${e._id}`} className="btn-edit">Edit</Link>
              <button className="btn-delete" onClick={() => deleteEvent(e._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventList;
