import React from "react";
import ReactDOM from "react-dom";
import NoteSidebar from "./NoteSidebar";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("NoteSidebar Component", () => {
  // Smoke test
  test("Renders", () => {
    const div = document.createElement("div");
    ReactDOM.render(<NoteSidebar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
