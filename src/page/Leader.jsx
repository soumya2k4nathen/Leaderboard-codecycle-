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


      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 flex flex-col items-center p-8 text-center">
        <h1 className="text-4xl font-bold text-white mt-1 ">CODE CYCLE</h1>

        <div className="w-3/4 p-6 mt-6 rounded-md border-gray-500 ">
          <DataTableDemo />
        </div>
      </div>
    </div>
  );
};

export default Leader;
