import "../../polyfills";
import React from "react";
import ReactDOM from "react-dom";
import RunItem from "../RunInfoModal";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const data = {
    date: new Date("2018-05-05"),
    distance: 2.95,
    seconds: 1800,
    notes: "Getting faster!",
  };
  ReactDOM.render(<RunInfoModal data={data}/>, div);
});
