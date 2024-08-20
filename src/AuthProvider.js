import React, { useContext, createContext, useState, useEffect } from "react";
import { auth } from "./firebase";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const signup = async (email, password) => {
    const userCredential = await auth.createUserWithEmailAndPassword(
      email,
      password
    );
    await userCredential.user.sendEmailVerification(); // Sende Verifizierungs-E-Mail
    return userCredential.user;
  };

  const login = async (email, password) => {
    await auth.signInWithEmailAndPassword(email, password);
    const user = auth.currentUser;
    return user;
  };

  const logout = () => {
    return auth.signOut();
  };

  const value = {
    currentUser,
    signup,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
