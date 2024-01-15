import React from "react";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Gallery from "./Gallery/Gallery";
import About from "./About/About";
import Footer from "./Footer";
import "./index.css"; // Import the CSS file
import StreetStyle from "./Gallery/StreetStyle";
import ClassicStyle from "./Gallery/ClassicStyle";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="mt-4 mb-4">
          {" "}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/gallery/street-style" element={<StreetStyle />} />
            <Route path="/gallery/classic" element={<ClassicStyle />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
