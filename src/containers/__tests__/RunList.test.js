import React from "react";
import ReactDOM from "react-dom";
import { RunList } from "../RunList";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<RunList />, div);
});
