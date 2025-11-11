import React from "react";
import img1 from "../assets/3f40eb8f-e92d-4a0e-a4db-329f103e8fca.png";
import img2 from "../assets/hero1.avif";
import img3 from "../assets/download - Copy.jpg";
import img4 from "../assets/download.png";

const carouselImages = [img1, img2, img3, img4];

const backgroundImageUrl =
  "https://placehold.co/1920x1080/172554/ffffff?text=SkillSwap+Background";

const HeroSection = () => {
  
  
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-8 lg:p-12 font-inter overflow-x-hidden">
      <div className="w-full max-w-7xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        
        <div
          className="relative flex flex-col lg:flex-row items-center justify-between p-6 sm:p-10 md:p-16 text-white"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.8), rgba(17, 24, 39, 0.8)), url(${backgroundImageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          
          <div className="lg:w-1/2 max-w-xl text-left py-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Teach What you know, <br />
              <span className="text-amber-400 drop-shadow-md">
                Learn what you love.
              </span>
            </h1>
            <p className="text-lg sm:text-xl mt-6 font-light opacity-90">
              Skill Swap is where you build confidence, improve communication,
              and create collaborative relationships through peer-to-peer
              learning.
            </p>

            <div className="mt-10">
              <a
                href="#signup"
                className="inline-block bg-amber-400 text-gray-900 font-bold px-8 py-4 rounded-full shadow-xl hover:bg-amber-500 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
              >
                Get Started Today
              </a>
            </div>
          </div>

          
          <div className="hidden lg:block lg:w-1/2"></div>
        </div>

        
        <div className="p-6 sm:p-10 md:p-16 bg-white">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Discover New Skills
          </h2>

          <div className="carousel w-full h-[500px] rounded-2xl shadow-xl border-4 border-amber-400/50 overflow-hidden relative">
            {carouselImages.map((src, index) => {
              const slideId = `slide${index + 1}`;
              const prevId =
                index === 0 ? `slide${carouselImages.length}` : `slide${index}`;
              const nextId =
                index === carouselImages.length - 1
                  ? "slide1"
                  : `slide${index + 2}`;

              return (
                <div
                  key={index}
                  id={slideId}
                  className="carousel-item relative w-full h-full"
                >
                  <img
                    src={src}
                    alt={`Skill Showcase ${index + 1}`}
                    className="w-full h-full object-cover rounded-2xl"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://placehold.co/1200x500/FACC15/0F172A?text=Image+Unavailable";
                    }}
                  />

                  
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a
                      href={`#${prevId}`}
                      className="btn btn-circle bg-gray-800 text-white hover:bg-gray-700 opacity-80 border-none transition"
                    >
                      ❮
                    </a>
                    <a
                      href={`#${nextId}`}
                      className="btn btn-circle bg-gray-800 text-white hover:bg-gray-700 opacity-80 border-none transition"
                    >
                      ❯
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center w-full py-2 gap-2 mt-4">
            {carouselImages.map((_, index) => (
              <a
                key={index}
                href={`#slide${index + 1}`}
                className="w-3 h-3 rounded-full bg-blue-600 hover:bg-amber-400 transition"
              ></a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
