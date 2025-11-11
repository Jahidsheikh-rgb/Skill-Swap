import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"; // ✅ add useNavigate
// import { AuthContext } from "../provider/Authprovider";
import { AuthContext } from "../provider/Authprovider";
import toast from "react-hot-toast";
import SignbyG from "./SignbyG";
const Signup = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); 

  const { createUser, updateUserData } = useContext(AuthContext);

  const handleregister = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      setLoading(false);
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log("✅ User created:", user);
        return updateUserData(name, photoURL);
      })
      .then(() => {
        toast.success(" Profile updated successfully!");
        navigate("/"); 
      })
      .catch((error) => {
        toast.error("Signup error:", error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
      <form onSubmit={handleregister}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <input
          type="text"
          name="photoURL"
          placeholder="Photo URL (optional)"
          className="w-full mb-3 p-2 border rounded"
        />
        {error && <p className="text-red-500 mb-3">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 rounded-lg transition ${
            loading
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>

      <p className="mt-4 text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-600 hover:underline">
          Login
        </Link>
      </p>
      <SignbyG/>
    </div>
  );
};

export default Signup;
