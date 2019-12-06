import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";

import Home from "./pages/Home";
import Album from "./pages/Album";
import Auth from "./pages/Auth";

const isAuthenticated = () => sessionStorage.getItem("access_token");

const PrivateRoute = ({ component: Component, ...props }) => (
  <Route
    {...props}
    render={props =>
      isAuthenticated() ? <Component {...props} /> : <Redirect to="/auth" />
    }
  />
);

export default function Routes() {
  return (
    <Switch>
      <Route path="/auth" component={Auth} />
      <Route path="/auth/:hash" component={Auth} />

      <PrivateRoute path="/" exact component={Home} />
      <PrivateRoute path="/album/:hash" component={Album} />

      <Redirect to="/" />
    </Switch>
  );
}
