import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("can render a App", () => {
  const container = document.createElement("div");
  ReactDOM.render(<App />, container);
  const text = container.querySelector("h1");
  expect(text.textContent).toBe("Home");
});

