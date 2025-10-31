import React from "react";

const Herotext = () => {
  return (
    <section className="relative flex items-center justify-center  overflow-hidden text-black">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute w-[600px] h-[600px] bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob top-[-100px] left-[-100px]"></div>
        <div className="absolute w-[500px] h-[500px] bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 top-[200px] right-[-150px]"></div>
        <div className="absolute w-[700px] h-[700px] bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000 bottom-[-200px] left-[100px]"></div>
      </div>

      <div className="relative max-w-3xl text-center px-6 py-24">
        <h1 className="text-4xl lg:text-5xl font-bold leading-snug">
          Skill Swap
        </h1>
        <p className="text-lg lg:text-xl mt-6">
          Skill swap is not just about learning—it’s also a way to build
          confidence, improve communication, and create collaborative
          relationships.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <a
            href="#signup"
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Herotext;
