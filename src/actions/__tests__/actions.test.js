// TESTS - actions.test.js

import * as actions from "../";
import * as types from "../actionTypes";

describe("actions", () => {
  it("should create an action to get user asynchronously");
  it("should create an an action to add a run asynchronously");
  
  it("should create an action to set the sort attribute", () => {
    const attribute = "pace";
    const expectedAction = {
      type: types.SET_SORT_ATTRIBUTE,
      attribute,
    };
    expect(actions.setSortAttribute(attribute)).toEqual(expectedAction);
  });
  
  it("should create an action to toggle reverse", () => {
    const expectedAction = {
      type: types.TOGGLE_REVERSE,
    };
    expect(actions.toggleReverse()).toEqual(expectedAction);
  });
  
  it("should create an action to receive runs", () => {
    const response = {
      "user1run1": {
        date: new Date("2018-05-01"),
        distance: 2.45,
        seconds: 1500,
        notes: "",
      },
      "user1run2": {
        date: new Date("2018-05-03"),
        distance: 2.65,
        seconds: 1600,
        notes: "some notes!",
      },
      "user1run3": {
        date: new Date("2018-05-05"),
        distance: 2.95,
        seconds: 1800,
        notes: "",
      },
    };
    const expectedAction = {
      type: types.FETCH_RUNS_SUCCESS,
      response,
    };
    expect(actions.receiveRuns(response)).toEqual(expectedAction);
  });
  
  it("should create an action to request runs", () => {
    const expectedAction = {
      type: types.FETCH_RUNS_REQUEST,
    };
    expect(actions.requestRuns()).toEqual(expectedAction);
  });
});
