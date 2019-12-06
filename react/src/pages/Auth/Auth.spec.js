import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import Auth from ".";

describe("TodoList", () => {
  it("renders", () => {
    const container = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <Auth />
      </MemoryRouter>,
      container
    );
    expect(container).toBeTruthy();
  });
});
