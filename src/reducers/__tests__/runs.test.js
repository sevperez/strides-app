// TESTS - runs.test.js

import deepfreeze from "deepfreeze";

import reducer, { getSortedRunIds } from "../runs";
import { FETCH_RUNS_REQUEST,
         FETCH_RUNS_SUCCESS } from "../../actions/actionTypes";

describe("runs reducer", () => {
  it("should return the initial state", () => {
    expect(reducer()({}, {}).runs).toEqual({});
  });
  
  describe("set isFetching", () => {
    it("should set isFetching to true if true and FETCH_RUNS_SUCCESS", () => {
      const stateBefore = true;
      const action = {
        type: FETCH_RUNS_SUCCESS,
        response: {},
      };
      const stateAfter = false;
      expect(
        reducer()(stateBefore, action).isFetching
      ).toEqual(stateAfter);
    });
    
    it("should set isFetching to true if false and FETCH_RUNS_REQUEST", () => {
      const stateBefore = false;
      const action = { type: FETCH_RUNS_REQUEST };
      const stateAfter = true;
      expect(
        reducer()(stateBefore, action).isFetching
      ).toEqual(stateAfter);
    });
  });
});

describe("selectors", () => {
  describe ("getSortedRunIds", () => {
    const runs = {
      "user1run1": {
        date: new Date("2018-05-01"),
        distance: 2.85,
        seconds: 2000, // 701
        notes: "",
      },
      "user1run2": {
        date: new Date("2018-05-03"),
        distance: 2.65,
        seconds: 1600, // 603
        notes: "",
      },
      "user1run3": {
        date: new Date("2018-05-02"),
        distance: 2.65,
        seconds: 1800, // 679
        notes: "",
      }
    };
    
    it("sorts IDs by attribute, then by date", () => {
      const attribute = "distance";
      const expectedOutput = ["user1run3", "user1run2", "user1run1"];
      
      expect(getSortedRunIds(runs, attribute)).toEqual(expectedOutput);
    });
    
    it("sorts IDs by pace", () => {
      const attribute = "pace";
      const expectedOutput = ["user1run2", "user1run3", "user1run1"];
      
      expect(getSortedRunIds(runs, attribute)).toEqual(expectedOutput);
    });
    
    it("returns an empty array if runs.length === 0", () => {
      const attribute = "distance";
      expect(getSortedRunIds({}, attribute)).toEqual([]);
    });
  });
});
