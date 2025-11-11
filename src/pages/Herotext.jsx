import React from "react";
import backgroundImageUrl from "../assets/herotext.png";

const Herotext = () => {
  return (
    <section
     
      className="relative flex items-center justify-start min-h-screen overflow-hidden text-black"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
     
      <div className="relative max-w-xl text-left px-6 py-24 ml-16 bg-opacity-80 p-10 rounded-lg shadow-2xl">
        <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
          Teach What you know, <br />
          <span className="text-blue-600">Learn what you love.</span>
        </h1>
        <p className="text-xl lg:text-2xl mt-6 font-medium">
          Skill Swap is where you build confidence, improve communication, and
          create collaborative relationships through learning.
        </p>
        
        <div className="mt-8">
          <a
            href="#signup"
            className="inline-block bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Herotext;