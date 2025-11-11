import React from "react";
import { signInWithPopup } from "firebase/auth";
import   {  auth, googleProvider } from "../Firebase/firebase.config.js";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast"; 

const SignbyG = () => {
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        toast.success(`Welcome ${user.displayName}`);
        navigate("/"); 
      })
      .catch((error) => {
     
        toast.error(error.message);
      });
  };

  return (
    
      <div className="p-3">
        <button
        onClick={handleGoogleSignIn}
        className="flex justify-center items-center gap-3 w-full bg-white border border-gray-300 px-5 py-2 rounded-lg shadow-md hover:shadow-lg transition"
      >
        <img
          src="https://developers.google.com/identity/images/g-logo.png"
          alt="Google"
          className="w-5 h-5"
        />
        <span>Sign in with Google</span>
      </button>
   
      </div>
  );
};

export default SignbyG;
