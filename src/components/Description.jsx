import React, { useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/Authprovider";
import { toast } from "react-hot-toast"; // for success message

const Description = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthReady } = useContext(AuthContext);
  const skill = location.state?.skill;


  
  useEffect(() => {
    if (isAuthReady && !user) {
      navigate("/login", { state: { from: location } }); 
    }
  }, [isAuthReady, user, navigate, location]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Session booked successfully!");
    setFormData({ name: "", email: "" }); 
  };

  if (!skill) {
    return <p className="text-center mt-10">No skill selected.</p>;
  }

  if (!user) {
    return <p className="text-center mt-10 text-gray-600">Redirecting to login...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">{skill.skillName}</h1>
      <div className="space-y-2 text-gray-700">
        <p><strong>Provider:</strong> {skill.providerName}</p>
        <p><strong>Rating:</strong> ⭐ {skill.rating} / 5</p>
        <p><strong>Price:</strong> ${skill.price}</p>
        <p><strong>Category:</strong> {skill.category || "N/A"}</p>
        <p><strong>Duration:</strong> {skill.duration || "N/A"}</p>
        <p><strong>Description:</strong> {skill.description}</p>
      </div>

      {/* Book Session Form */}
      <div className="mt-8 border-t pt-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Book a Session</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Book Session
          </button>
        </form>
      </div>
    </div>
  );
};

export default Description;
