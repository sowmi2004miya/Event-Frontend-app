import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditEvent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    date: "",
    organiser: "",
    location: "",
  });

  useEffect(() => {
    axios.get(`http://localhost:5000/api/occasion/${id}`).then((res) => setForm(res.data));
  }, [id]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/occasion/${id}`, form);
    alert("Event updated successfully!");
    navigate("/events");
  };

  return (
    <div className="form-container">
      <h2>Edit Event</h2>
      <form onSubmit={handleSubmit} className="event-form">
        <input name="name" value={form.name} onChange={handleChange} required />
        <input type="date" name="date" value={form.date} onChange={handleChange} required />
        <input name="organiser" value={form.organiser} onChange={handleChange} required />
        <input name="location" value={form.location} onChange={handleChange} required />
        <button type="submit" className="btn-primary">Update Event</button>
      </form>
    </div>
  );
}

export default EditEvent;
