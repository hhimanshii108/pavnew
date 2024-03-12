import React from "react";
import Home from "./Components/Home";
import Scanner from "./Components/Scanner";
import Upload from "./Components/Upload";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/scanner" element={<Scanner />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </Router>
  );
};

export default App;
