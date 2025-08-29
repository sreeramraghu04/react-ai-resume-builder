import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 text-center p-6">
      {/* Hero Section */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4">
        Build Your Resume in Minutes 🚀
      </h1>
      <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
        Create a professional, ATS-friendly resume using multiple templates,
        AI-powered summaries, and one-click PDF downloads.
      </p>

      {/* CTA Button */}
      <Link
        to="/resumebuilder"
        className="px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow hover:bg-blue-700 transition"
      >
        Get Started
      </Link>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-5xl">
        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="font-bold text-lg mb-2">🎨 Multiple Templates</h3>
          <p className="text-gray-600">
            Choose from modern, classic, minimalist, and creative designs.
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="font-bold text-lg mb-2">🤖 AI Assistant</h3>
          <p className="text-gray-600">
            Generate professional resume summaries instantly with AI.
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="font-bold text-lg mb-2">📥 Easy Download</h3>
          <p className="text-gray-600">
            Export your resume as a PDF and save it directly to your computer.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 text-sm text-gray-500">
        <span className="font-semibold">Ram's </span>ai-resume-builder
      </footer>
    </div>
  );
};

export default Landing;
