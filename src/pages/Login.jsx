import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../provider/Authprovider.jsx";
import img from "../assets/login.jpg";
import { AuthContext } from "../provider/Authprovider";
import toast from "react-hot-toast";
import SignbyG from "./SignbyG";

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    const email = e.target.email.value.trim();
    const password = e.target.password.value;

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setLoading(true);
    try {
      const result = await logIn(email, password);
      toast.success("User logged in:", result.user);
      e.target.reset();
      navigate("/");
    } catch (err) {
      console.error(err);
      setError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="flex flex-col lg:flex-row-reverse items-center bg-white shadow-2xl rounded-lg overflow-hidden w-full max-w-5xl">
        {/* Login Form */}
        <div className="w-full lg:w-1/2 p-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Login now!</h1>
          <p className="text-gray-500 mb-8">
            Welcome back! Enter your details.
          </p>

          <form className="space-y-5" onSubmit={handleLogin}>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="text-right">
              <Link
                to="/Forgetpass"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 px-4 rounded-md font-medium text-white transition ${
                loading
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="text-gray-500 mt-4 text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Signup
            </Link>
          </p>
          <SignbyG />
        </div>

        {/* Image */}
        <div className="hidden lg:block w-1/2">
          <img
            src={img}
            alt="Login illustration"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
