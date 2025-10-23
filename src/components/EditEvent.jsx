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
    axios
      .get(`http://localhost:5000/api/occasion/${id}`)
      .then((res) => setForm(res.data))
      .catch((err) => console.error("Error fetching event:", err));
  }, [id]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/occasion/${id}`, form);
      alert("Event updated successfully!");
      navigate("/occasion");
    } catch (err) {
      alert("Error updating event");
    }
  };

  return (
    <div className="form-container">
      <h2>Edit Event</h2>
      <form onSubmit={handleSubmit} className="event-form">
        <input
          type="text"
          name="name"
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
          value={form.organiser}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          value={form.location}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn-primary">
          Update Event
        </button>
      </form>
    </div>
  );
}

export default EditEvent;
