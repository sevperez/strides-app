import React from "react";
import ReactDOM from "react-dom";
import { RunTable } from "../RunTable";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<RunTable />, div);
});
