import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Collectors from "./components/ArtCollectors/Collectors";
import Corporates from "./components/Corporates/Corporates";
import Artist from "./components/ForArtist/Artist";
import Home from "./components/Home/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/for-artists" element={<Artist />} />
        <Route path="/for-art-collectors" element={<Collectors />} />
        <Route path="/for-corporates" element={<Corporates />} />
      </Routes>
    </Router>
  );
}
