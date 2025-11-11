import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/error-404.png';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
     
      <img 
        src={img} 
        alt="404 Error" 
        className="w-72 sm:w-96 mb-6 drop-shadow-lg"
      />

      <h1 className="text-4xl font-bold text-gray-800 mb-2">404 - Page Not Found</h1>

    
      <p className="text-gray-600 mb-6">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>

      
      <Link 
        to="/" 
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-lg shadow-md transition duration-200"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
