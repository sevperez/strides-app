// TESTS - sort.test.js

import deepfreeze from "deepfreeze";

import reducer from "../sort";
import { SET_SORT_ATTRIBUTE } from "../../actions/actionTypes";

describe("sort reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual("DATE");
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
    
    expect(reducer(stateBefore, action)).toEqual(stateAfter);
  });
});
