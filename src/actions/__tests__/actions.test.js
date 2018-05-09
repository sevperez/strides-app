// TESTS - actions.test.js

import * as actions from "../";
import * as types from "../actionTypes";

describe("actions", () => {
  it("should create an an action to add a run", () => {
    const id = "testUserRun1";
    const data = {
      date: new Date("2018-05-01"),
      distance: 2.45,
      seconds: 1500,
      notes: "",
    };
    const expectedAction = {
      type: types.ADD_RUN,
      id,
      data,
    };
    expect(actions.addRun(id, data)).toEqual(expectedAction);
  });
  
  it("should create an action to set the sort attribute", () => {
    const attribute = "PACE";
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
});
