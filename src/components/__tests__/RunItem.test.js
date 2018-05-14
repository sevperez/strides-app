import "../../polyfills";
import React from "react";
import ReactDOM from "react-dom";
import RunItem from "../RunItem";

it("renders without crashing", () => {
  const tbody = document.createElement("tbody");
  const data = {
    date: new Date("2018-05-05"),
    distance: 2.95,
    seconds: 1800,
    notes: "Getting faster!",
  };
  ReactDOM.render(<RunItem data={data}/>, tbody);
});
