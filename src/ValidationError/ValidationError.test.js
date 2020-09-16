import React from "./node_modules/react";
import ReactDOM from "./node_modules/react-dom";
import ValidationError from "./ValidationError";
import { shallow } from "./node_modules/enzyme";
import toJson from "./node_modules/enzyme-to-json";

describe("ValidationError Component", () => {
  // Smoke test
  test("Renders", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ValidationError />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // Snapshot test
  test.skip("Renders Default State", () => {
    const wrapper = shallow(<ValidationError />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
