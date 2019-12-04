import React from "react";
import ReactDOM from "react-dom";
import Cover from ".";

it("can render a Cover", () => {
  const container = document.createElement("div");
  ReactDOM.render(<Cover />, container);
  expect(container).toBeTruthy();
});
