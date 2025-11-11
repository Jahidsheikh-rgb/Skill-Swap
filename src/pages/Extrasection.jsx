import React, { useEffect, useState } from "react";

const Extrasection = () => {
  const [providers, setProviders] = useState([]);

  // Fetch data from local JSON file
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setProviders(data))
      .catch((err) => console.error("Error loading data:", err));
  }, []);

  return (
    <div className="bg-gray-50 py-12 px-6">
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Top Rated Providers
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {providers

            .sort((a, b) => b.rating - a.rating)
            .slice(0, 3)
            .map((p) => (
              <div
                key={p.skillId}
                className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition"
              >
                <img
                  src={p.providerimage}
                  alt={p.providerName}
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {p.providerName}
                </h3>
                <p className="text-gray-500">{p.skillName}</p>
                <p className="mt-2 text-yellow-500 font-bold text-lg">
                  {p.rating}
                </p>
                <p className="text-gray-600 mt-1">${p.price}/session</p>
                <p className="text-sm text-gray-400 mt-2">
                  Slots Available: {p.slotsAvailable}
                </p>
              </div>
            ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center hover:bg-blue-100 transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              1️⃣ Sign Up
            </h3>
            <p className="text-gray-600">
              Create your free account in just a few clicks.
            </p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center hover:bg-blue-100 transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              2️⃣ Find a Provider
            </h3>
            <p className="text-gray-600">
              Browse through top-rated experts and choose the right one.
            </p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center hover:bg-blue-100 transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              3️⃣ Connect & Learn
            </h3>
            <p className="text-gray-600">
              Chat, collaborate, and complete your session smoothly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Extrasection;
