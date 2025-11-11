import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";

const Data = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((info) => setSkills(info))
      .catch((err) => console.error("Error loading data:", err));
  }, []);

  const navigate = useNavigate(); 

 const handleClick = (skill) => {
    
    navigate("/description", { state: { skill } });
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">
        Popular Skills
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <div
            key={skill.skillId}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-1 p-5 text-center"
          >
            <img
              src={skill.image}
              alt={skill.skillName}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />

            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {skill.skillName}
            </h2>
            <p className="text-gray-600 mb-2">
              <strong>Provider:</strong> {skill.providerName}
            </p>
            <div className="flex justify-between px-5">
              <p className="text-yellow-500 font-medium">
                <span className=" text-black">Rating :</span> {skill.rating} /
                5.0
              </p>
              <p className="text-green-600 font-semibold mt-2">
                <span className=" text-black">price : </span>${skill.price}
              </p>
            </div>

            {/* <p className="text-gray-500 text-sm mt-3 mb-4">
              {skill.description}
            </p> */}

            <button
              onClick={() => handleClick(skill)}
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium transition"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Data;
