import React, { useState, useContext } from "react";
import { Menu, X } from "lucide-react"; // icons
import { ResumeContext } from "../context/ResumeContext";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setResumeData } = useContext(ResumeContext);

  const handleNewResume = () => {
    setResumeData({
      name: "",
      email: "",
      phone: "",
      summary: "",
      education: [],
      experience: [],
      skills: [],
      projects: [],
      template: "modern",
    });
    setIsOpen(false); // close menu on mobile after click
  };

  const navLinkClasses = ({ isActive }) =>
    `hover:text-blue-600 ${
      isActive
        ? "text-blue-600 font-semibold"
        : "text-gray-700 dark:text-gray-200"
    }`;

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <NavLink
            to="/"
            className="text-2xl font-bold text-blue-600 dark:text-blue-400"
          >
            AI Resume Builder
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/" className={navLinkClasses}>
              Home
            </NavLink>
            <NavLink to="/resumebuilder" className={navLinkClasses}>
              Resume Builder
            </NavLink>
            <NavLink to="/about" className={navLinkClasses}>
              About
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 px-4 pb-4 space-y-3">
          <NavLink
            to="/"
            className={navLinkClasses}
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/home"
            className={navLinkClasses}
            onClick={() => setIsOpen(false)}
          >
            Resume Builder
          </NavLink>
          <NavLink
            to="/about"
            className={navLinkClasses}
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <button
            className="w-full text-left px-3 py-2 bg-blue-600 text-white rounded-lg"
            onClick={handleNewResume}
          >
            New Resume
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
