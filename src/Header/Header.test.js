import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { BrowserRouter } from "react-router-dom";

describe("Header Component", () => {
  // Smoke test
  test("Renders", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  // Snapshot test
  test("Renders Default State", () => {
    const wrapper = shallow(<Header />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
