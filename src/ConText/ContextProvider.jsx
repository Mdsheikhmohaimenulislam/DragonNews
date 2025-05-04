import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase.config";

const ContextProvider = ({ children }) => {
  // user value set
  const [user, setUser] = useState(null);

  // set loading janno data sev thake
  const [loading, setLoading] = useState(true);

  // Register
  const createRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login
  const loginSection = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // LogOut section
  const LogOut = () => {
    setLoading(true);
    return signOut(auth);
  };


// Profile name or photo set
const profileSet = (updated) => {
    setLoading(true);
   return updateProfile(auth.currentUser, updated)
}

  // useEffect
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const userInfo = {
    user,
    loading,
    createRegister,
    loginSection,
    profileSet,
    LogOut,
    setUser,

  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default ContextProvider;
