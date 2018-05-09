// TESTS - sort.test.js

import deepfreeze from "deepfreeze";

import { sort, reverse } from "../sort";
import { SET_SORT_ATTRIBUTE, TOGGLE_REVERSE } from "../../actions/actionTypes";

describe("sort reducer", () => {
  it("should return the initial state", () => {
    expect(sort(undefined, {})).toEqual("DATE");
  });
  
  it("should handle SET_SORT_ATTRIBUTE", () => {
    const stateBefore = "PACE";
    const action = {
      type: SET_SORT_ATTRIBUTE,
      attribute: "DISTANCE",
    };
    const stateAfter = "DISTANCE";
    
    deepfreeze(stateBefore);
    deepfreeze(stateAfter)
    
    expect(sort(stateBefore, action)).toEqual(stateAfter);
  });
  
  describe("TOGGLE_REVERSE", () => {
    it("should set to false on default", () => {
      const action = { type: TOGGLE_REVERSE };
      expect(reverse(undefined, action)).toEqual(false);
    });
    
    it("should set to true if false", () => {
      const action = { type: TOGGLE_REVERSE };
      expect(reverse(false, action)).toEqual(true);
    });
    
    it("should set to false if true", () => {
      const action = { type: TOGGLE_REVERSE };
      expect(reverse(true, action)).toEqual(false);
    });
  });
});
