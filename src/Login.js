import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from "./auth-context";

function Login() {
  const { signIn } = useAuth();
  const [authenticated, setAuthenticated] = useState(auth.isAuthenticated());
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    if (signIn({ email, password })) {
      setAuthenticated(true);
    } else {
      alert('Failed to login');
      setEmail('');
      setPassword('');
    }
  };

  if (authenticated) return <Redirect to={{ pathname: "/" }} />;

  return (
    <>
      <h1>Login</h1>
      <input
        value={email}
        onChange={({ target: { value } }) => setEmail(value)}
        type="text"
        placeholder="email"
      />
      <input
        value={password}
        onChange={({ target: { value } }) => setPassword(value)}
        type="password"
        placeholder="password"
      />
      <button onClick={handleClick}>Login</button>
    </>
  );
}

export default Login;