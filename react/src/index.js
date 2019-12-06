import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";

import configureStore from "./store/configureStore";
import history from "./history";
import App from "./App";
import "./main.scss";

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("app")
);
