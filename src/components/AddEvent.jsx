import { useState } from "react";
import axios from "axios";

function AddEvent() {
  const [form, setForm] = useState({
    name: "",
    date: "",
    organiser: "",
    location: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/occasion/add", form);
      alert("Event added successfully!");
      setForm({ name: "", date: "", organiser: "", location: "" });
    } catch (err) {
      alert("Failed to add event");
    }
  };

  return (
    <div className="form-container">
      <h2>Add New Event</h2>
      <form onSubmit={handleSubmit} className="event-form">
        <input
          type="text"
          name="name"
          placeholder="Event Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="organiser"
          placeholder="Event Organiser"
          value={form.organiser}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Event Location"
          value={form.location}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn-primary">Add Event</button>
      </form>
    </div>
  );
}

export default AddEvent;
