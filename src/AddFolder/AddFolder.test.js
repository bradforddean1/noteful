import React from "react";
import ReactDOM from "react-dom";
import AddFolder from "./AddFolder";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("AddFolder Component", () => {
  // Smoke test
  test("Renders", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <AddFolder history={{ push: () => null }} handleSubmit={() => null} />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
