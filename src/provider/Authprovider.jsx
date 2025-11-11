import React, { createContext, useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [user, setUser] = useState(null);
  const [isAuthReady, setIsAuthReady] = useState(false);

  useEffect(() => {
    const authInstance = getAuth(app);
    setAuth(authInstance);

    const unsubscribe = onAuthStateChanged(authInstance, (currentUser) => {
      setUser(currentUser);
      setIsAuthReady(true);
    });

    return () => unsubscribe();
  }, []);

  const logIn = (email, password) => signInWithEmailAndPassword(auth, email, password);
  const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
  const logOut = () => signOut(auth);
  const updateUserData = async (name, photoURL) => {
    if (!auth?.currentUser) throw new Error("No user logged in");
    await updateProfile(auth.currentUser, { displayName: name, photoURL });
    setUser({ ...auth.currentUser }); 
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, isAuthReady, auth, logIn, createUser, logOut, updateUserData }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
