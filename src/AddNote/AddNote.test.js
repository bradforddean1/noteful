import React from "react";
import ReactDOM from "react-dom";
import AddNote from "./AddNote";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("AddNote Component", () => {
  // Smoke test
  test("Renders", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <AddNote history={{ push: () => null }} handleSubmit={() => null} />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
