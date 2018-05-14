import React from "react";
import ReactDOM from "react-dom";
import { SortLink } from "../SortLink";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SortLink />, div);
});
