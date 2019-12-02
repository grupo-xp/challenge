import React from "react";
import ReactDOM from "react-dom";
import Home from "./";

it("can render a Home", () => {
  const container = document.createElement("div");
  ReactDOM.render(<Home />, container);
  const text = container.querySelector("h1");
  expect(text.textContent).toBe("Home");
});
