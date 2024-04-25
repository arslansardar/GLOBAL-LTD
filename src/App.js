import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Page1 from "./Router-Components/Page1";
import Page2 from "./Router-Components/Page2"; // Assuming you have another component
import "./components/component.css";
import { Page3 } from "./Router-Components/Page3";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </Router>
  );
};

export default App;
