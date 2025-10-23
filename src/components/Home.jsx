import { useNavigate } from "react-router-dom";
function Home() {
    const navigate=useNavigate();
  return (
    <div className="home-container">
      <div className="home-text">
        <h1>Welcome to Software Company Event Management</h1>
        <p>Manage your corporate events efficiently — plan, track, and update with ease.</p>
        <button className="explore-btn" onClick={() =>navigate("/occasion")}>Explore Events</button>
      </div>
      <img
        src="https://www.shutterstock.com/image-photo/event-management-concept-flowchart-related-600w-1355114297.jpg"
        alt="Corporate Event"
        className="home-image"
      />
    </div>
  );
}

export default Home;
