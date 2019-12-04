import React from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

import Home from "./pages/Home";
import Album from "./pages/Album";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/album/:name" component={Album} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}
