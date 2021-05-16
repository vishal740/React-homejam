import "./App.css";
import Homepage from "./Components/Homepage/Homepage.js";
import UpcomingShows from "./Components/UpcomingShows/UpcomingShows.js";
import Reviews from "./Components/Reviews/Reviews.js";

function App() {
  return (
    <>
      <Homepage />
      <div className="events">
        <UpcomingShows />
        <Reviews />
      </div>
    </>
  );
}

export default App;
