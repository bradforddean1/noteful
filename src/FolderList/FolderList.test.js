import React from "react";
import ReactDOM from "react-dom";
import FolderList from "./FolderList";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe("FolderList Component", () => {
  // Smoke test
  test("Renders", () => {
    const div = document.createElement("div");
    ReactDOM.render(<FolderList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  const folders = [
    {
      id: "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
      name: "Important",
    },
    {
      id: "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
      name: "Super",
    },
    {
      id: "b07162f0-ffaf-11e8-8eb2-f2801f1b9fd1",
      name: "Spangley",
    },
  ];

  test("Renders list of folder with folders array passed in", () => {
    const wrapper = shallow(<FolderList folders={folders} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
