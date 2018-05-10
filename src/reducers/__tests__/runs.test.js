// TESTS - runs.test.js

import deepfreeze from "deepfreeze";

import reducer, { getSortedRunIds } from "../runs";
import { ADD_RUN,
         UPDATE_RUN,
         REQUEST_RUNS,
         RECEIVE_RUNS } from "../../actions/actionTypes";

describe("runs reducer", () => {
  it("should return the initial state", () => {
    expect(reducer()({}, {}).runs).toEqual({});
  });
  
  it("should handle ADD_RUN", () => {
    const stateBefore = {};
    const action = {
      type: ADD_RUN,
      id: "testUserRun1",
      data: {
        date: new Date("2018-05-01"),
        distance: 2.45,
        seconds: 1500,
        notes: "",
      }
    };
    const stateAfter = {
      "testUserRun1": {
        date: new Date("2018-05-01"),
        distance: 2.45,
        seconds: 1500,
        notes: "",
      }
    };
    
    deepfreeze(stateBefore);
    deepfreeze(stateAfter);
    
    expect(
      reducer()(stateBefore, action).runs
    ).toEqual(stateAfter);
  });
  
  it("should handle UPDATE_RUN", () => {
    const stateBefore = {
      "testUserRun1": {
        date: new Date("2018-05-01"),
        distance: 2.45,
        seconds: 1500,
        notes: "",
      }
    };
    const action = {
      type: UPDATE_RUN,
      id: "testUserRun1",
      data: {
        date: new Date("2018-05-01"),
        distance: 2.55,
        seconds: 1600,
        notes: "Updating distance / time.",
      }
    };
    const stateAfter = {
      "testUserRun1": {
        date: new Date("2018-05-01"),
        distance: 2.55,
        seconds: 1600,
        notes: "Updating distance / time.",
      }
    };
    
    deepfreeze(stateBefore);
    deepfreeze(stateAfter);
    
    expect(
      reducer()(stateBefore, action).runs
    ).toEqual(stateAfter);
  });
  
  describe("set isFetching", () => {
    it("should set isFetching to true if true and RECEIVE_RUNS", () => {
      const stateBefore = true;
      const action = {
        type: RECEIVE_RUNS,
        response: {},
      };
      const stateAfter = false;
      expect(
        reducer()(stateBefore, action).isFetching
      ).toEqual(stateAfter);
    });
    
    it("should set isFetching to true if false and REQUEST_RUNS", () => {
      const stateBefore = false;
      const action = { type: REQUEST_RUNS };
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
