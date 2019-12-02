import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";

import Home from "./pages/Home";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="*" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
