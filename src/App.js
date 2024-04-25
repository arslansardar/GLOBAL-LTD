import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Page1 from "./Router-Components/Page1";
import Page2 from "./Router-Components/Page2"; // Assuming there's another component
import "./components/component.css";

const App = () => {
  const [activeSection, setActiveSection] = useState("");
  console.log("activeSection", activeSection);
  const handlesetActiveSection = (val) => {
    setActiveSection(val);
  };
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Page1
              activeSection={activeSection}
              onSelectSection={setActiveSection}
              handlesetActiveSection={handlesetActiveSection}
            />
          }
        />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </Router>
  );
};

export default App;
