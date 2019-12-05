import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import configureStore from "./store/configureStore";
import App from "./App";
import "./main.scss";

const store = configureStore(); // You can also pass in an initialState here
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
