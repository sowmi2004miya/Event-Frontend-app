import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddEvent from "./components/AddEvent";
import EventList from "./components/EventList";
import EditEvent from "./components/EditEvent";
import "./index.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-event" element={<AddEvent />} />
          <Route path="/occasion" element={<EventList />} />
          <Route path="/edit/:id" element={<EditEvent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
