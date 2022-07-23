import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./auth-context";

function PrivateRoute({ component: Component, ...rest }) {
  const { authenticated } = useAuth();
  return (
    <Route
      {...rest}
      render={
        props => authenticated ? (
          <Component {...props} />
        ) : (
            <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
          )
      }
    />
  )
}

export default PrivateRoute;