import React, { createContext, useContext, useState, useEffect } from "react";
import auth from "./auth";

const AuthContext = createContext();

function AuthProvider(props) {
  const [user, setUser] = useState(auth.user);
  const [authenticated, setAuthenticated] = useState(auth.isAuthenticated());

  const signIn = ({ email, password }) => {
    const result = auth.signIn({ email, password });
    setAuthenticated(result);
    return result;
  }

  const signOut = () => {
    auth.signOut();
    setAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ user, authenticated, signIn, signOut }} {...props} />
  )
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };