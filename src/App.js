import React, { useState, useEffect } from "react";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { useAuth } from "./auth-context";
import PrivateRoute  from "./PrivateRoute";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";
import NotFound from "./NotFound";

function AuthButtons() {
  const { authenticated } = useAuth();
  console.log('#AuthButtons:', authenticated);
  return authenticated ? (
    <>
      <Link to="/profile">
        <button>Profile</button>
      </Link>
      <LogoutButton />
    </>
  ) : (
      <Link to="/login">
        <button>Login</button>
      </Link>
    );
}

function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
        <AuthButtons />
      </header>
      <hr />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </Router>

  );
}

export default App;
