import React from "react";
import ReactDOM from "react-dom";
import { NewRunForm } from "../NewRunForm";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<NewRunForm />, div);
});
