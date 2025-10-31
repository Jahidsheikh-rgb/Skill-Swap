import React from "react";
import { Link } from "react-router";
import img from "../assets/login.jpg";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col lg:flex-row-reverse items-center bg-white shadow-2xl rounded-lg overflow-hidden w-full max-w-5xl">
        {/* Right side: Login Form */}
        <div className="w-full lg:w-1/2 p-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Login now!</h1>
          <p className="text-gray-500 mb-8">
            Welcome back! Please enter your details to access your account.
          </p>

          <form className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Forgot password */}
            <div className="text-right">
              <Link
                to="/forgot-password"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Login
            </button>

            {/* Error / Toast placeholder */}
            <div className="text-red-500 text-sm mt-2 hidden" id="errorMessage">
              Invalid email or password.
            </div>
          </form>

          {/* Signup Link */}
          <p className="text-gray-500 mt-4 text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Signup
            </Link>
          </p>

          <div className="mt-6">
            <button
              type="button"
              className="w-full flex items-center justify-center border py-2 px-4 rounded-md hover:bg-gray-100 transition"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Login with Google
            </button>
          </div>
        </div>

        
        <div className="hidden lg:block w-1/2">
          <img
            src={img}
            alt="Login "
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
