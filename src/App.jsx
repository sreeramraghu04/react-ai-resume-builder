import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Home from "./pages/Home";
import { ResumeProvider } from "./context/ResumeContext";

const App = () => {
  return (
    <Router>
      <ResumeProvider>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
          <NavBar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/resumebuilder" element={<Home />} />
          </Routes>
        </div>
      </ResumeProvider>
    </Router>
  );
};

export default App;
