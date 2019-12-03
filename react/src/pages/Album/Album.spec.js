import React from "react";
import ReactDOM from "react-dom";
import Album from ".";

it("can render a Album", () => {
  const container = document.createElement("div");
  ReactDOM.render(<Album />, container);
  const text = container.querySelector("h1");
  expect(text.textContent).toBe("Album -= ");
});
