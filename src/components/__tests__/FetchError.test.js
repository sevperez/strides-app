import React from "react";
import ReactDOM from "react-dom";
import FetchError from "../FetchError";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FetchError />, div);
});
