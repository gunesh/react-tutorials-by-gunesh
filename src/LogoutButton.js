import React from "react";
import { withRouter } from "react-router-dom";
import { useAuth } from "./auth-context";

function LogoutButton({ history }) {
  const { signOut } = useAuth();
  const handleLogout = () => {
    console.log('logout in LogoutButton')
    signOut();
    history.push('/');
  }
  return (
    <button onClick={handleLogout}>Logout</button>
  );
}

export default withRouter(LogoutButton);