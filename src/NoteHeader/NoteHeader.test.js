import React from "react";
import ReactDOM from "react-dom";
import NoteHeader from "./NoteHeader";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("NoteHeader Component", () => {
  // Smoke test
  test("Renders", () => {
    const div = document.createElement("div");
    ReactDOM.render(<NoteHeader />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // Snapshot tests
  test("Renders default state", () => {
    const wrapper = shallow(<NoteHeader modDate="01/01/2020" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test("Renders state with NoteHeader name", () => {
    const wrapper = shallow(<NoteHeader modDate="01/01/2020" name="Dogs" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
