import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App/App";
import "./index.css";

import Store from "./dummy-store";

ReactDOM.render(
  <BrowserRouter>
    <App store={Store} />
  </BrowserRouter>,
  document.getElementById("root")
);
