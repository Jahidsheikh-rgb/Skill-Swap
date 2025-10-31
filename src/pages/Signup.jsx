import React from 'react';
import { Link } from 'react-router';

const Signup = () => {
    return (
        <div>
             <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form  className="space-y-4">  
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
            //   value={formData.name}
            //   onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
            //   value={formData.email}
            //   onChange={handleChange}
            //   required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Photo URL</label>
            <input
              type="text"
              name="photoURL"
            //   value={formData.photoURL}
            //   onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              name="password"
            //   value={formData.password}
            //   onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* {passwordError && <p className="text-red-500 mt-1">{passwordError}</p>} */}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Register
          </button>
        </form>

        <div className="mt-4 text-center">
          <p>
          
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
          <button
            //onClick={handleGoogleSignIn}
            className="mt-4 w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
          >
            Sign Up with Google
          </button>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Signup;