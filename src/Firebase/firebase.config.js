// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA88VCrHMYbeERbqor8luuL5ZJdNdAHs0w",
  authDomain: "skill-swap-7c979.firebaseapp.com",
  projectId: "skill-swap-7c979",
  storageBucket: "skill-swap-7c979.firebasestorage.app",
  messagingSenderId: "471796761637",
  appId: "1:471796761637:web:f79bb41403081bf8e7abcc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export default app;