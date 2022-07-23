import React from "react";
import { useAuth } from "./auth-context";

function Profile() {
  const { user } = useAuth();
  const { email, password, name } = user;
  return (
    <>
      <h1>Profile</h1>
      <dt>Email</dt>
      {/* <dd>{email}</dd> */}
      <dt>Password</dt>
      <dd>{password}</dd>
      <dt>Name</dt>
      <dd>{name}</dd>
    </>
  );
}

export default Profile;