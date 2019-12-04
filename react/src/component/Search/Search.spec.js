import React from "react";
import ReactDOM from "react-dom";
import Search from "./";

it("can render a Search", () => {
  const container = document.createElement("div");
  ReactDOM.render(<Search />, container);
  expect(container).toBeTruthy();
});
