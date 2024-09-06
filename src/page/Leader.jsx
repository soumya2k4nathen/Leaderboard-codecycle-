// src/pages/Leader.js
import React from "react";
import { DataTableDemo } from "../components/Table"; 

const Leader = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="src\assets\bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for blur effect */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 flex flex-col items-center p-8 text-center">
        {/* Titles */}
        <h1 className="text-4xl font-bold text-white mb-4">Code Cycle</h1>
        <h2 className="text-2xl font-bold text-yellow-400 mb-6">Leaderboard</h2>

        {/* DataTable Component */}
        <div className="w-3/4 p-6 bg-gray-400 rounded-md backdrop-blur-lg bg-opacity-20 border border-gray-200">
          <DataTableDemo />
        </div>
      </div>
    </div>
  );
};

export default Leader;
