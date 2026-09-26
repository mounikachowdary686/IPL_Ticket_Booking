import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Matches from "./pages/Matches";
import Booking from "./pages/Booking";
import BookingHistory from "./pages/BookingHistory";

import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/history" element={<BookingHistory />} />
      </Routes>

    </HashRouter>
  );
}

export default App;