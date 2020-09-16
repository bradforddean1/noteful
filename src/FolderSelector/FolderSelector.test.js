import React from "react";
import ReactDOM from "react-dom";
import FolderSelector from "./FolderSelector";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("FolderSelector Component", () => {
  // Smoke test
  test("Renders", () => {
    const div = document.createElement("div");
    ReactDOM.render(<FolderSelector handleChange={(e) => null} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
