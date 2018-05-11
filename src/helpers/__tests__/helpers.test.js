// TESTS - helpers.test.js

import "../../polyfills";
import * as helpers from "../";

const testRuns = {
  "user1run1": {
    date: new Date("2018-05-01"),
    distance: 2.45,
    seconds: 1500,      // 612.244 sec / mile
    notes: "",
  },
  "user1run2": {
    date: new Date("2018-05-03"),
    distance: 2.65,     // 603.773 sec / mile
    seconds: 1600,
    notes: "some notes!",
  },
  "user1run3": {
    date: new Date("2018-04-05"),
    distance: 2.95,
    seconds: 1800,      // 610.169 sec / mile
    notes: "",
  }
};

describe("helpers", () => {
  describe("getDateInfo", () => {
    it("returns a date info object", () => {
      const date = new Date("2018-05-01");
      const dateInfo = helpers.getDateInfo(date);
      const expectedOutput = {
        dateString: "May 1, 2018",
        dayString: "Tuesday",
      };
      
      expect(dateInfo).toEqual(expectedOutput);
    });
  })
  
  describe("secondsToTimeString", () => {
    describe("time < 1 hr", () => {
      it("returns an MM:SS string", () => {
        const seconds = 1650;
        const expectedOutput = "27:30";
        expect(helpers.secondsToTimeString(seconds)).toEqual(expectedOutput);
      });
    });
    
    describe("time > 1 hr", () => {
      it("returns an HH:MM:SS string", () => {
        const seconds = 4050;
        const expectedOutput = "1:07:30";
        expect(helpers.secondsToTimeString(seconds)).toEqual(expectedOutput);
      });
    });
  });
  
  describe("calculateTotalRuns", () => {
    it("returns 0 if number runs is 0", () => {
      expect(helpers.calculateTotalRuns({})).toEqual(0);
    });
    
    it("returns the correct number of runs", () => {
      expect(helpers.calculateTotalRuns(testRuns)).toEqual(3);
    });
  });
  
  describe("getStartDate", () => {
    it("returns the earliest date in the set", () => {
      expect(helpers.getStartDate(testRuns)).toEqual(testRuns["user1run3"].date);
    });
    
    it("returns null if the set is empty", () => {
      expect(helpers.getStartDate({})).toEqual(null);
    });
  });
  
  describe("getLongestRun", () => {
    it("returns the longest run object in the set", () => {
      expect(helpers.getLongestRun(testRuns)).toEqual(testRuns["user1run3"]);
    });
    
    it("returns null if the set is empty", () => {
      expect(helpers.getLongestRun({})).toEqual(null);
    });
  });
  
  describe("calculateTotalDistance", () => {
    it("returns null if the set is empty", () => {
      expect(helpers.calculateTotalDistance({})).toEqual(null);
    });
    
    it("returns the total distance with 2 decimal places", () => {
      expect(helpers.calculateTotalDistance(testRuns)).toEqual(8.05);
    });
  });
  
  describe("calculateTotalTime", () => {
    it("returns null if the set is empty", () => {
      expect(helpers.calculateTotalTime({})).toEqual(null);
    });
    
    it("returns the total time, in seconds, of the set", () => {
      expect(helpers.calculateTotalTime(testRuns)).toEqual(4900);
    });
  });
  
  describe("calculateAveragePaceSeconds", () => {
    it("returns null if the set is empty", () => {
      expect(helpers.calculateAveragePaceSeconds({})).toEqual(null);
    });
    
    it("returns the average pace (sec / mile), of the set (unrounded)", () => {
      const input = helpers.calculateAveragePaceSeconds(testRuns);
      const expectedOutput = 4900 / 8.05;
      expect(input).toEqual(expectedOutput);
    });
  });
  
  describe("getRecordPaceRun", () => {
    it("returns null if the set is empty", () => {
      expect(helpers.getRecordPaceRun({})).toEqual(null);
    })
    
    it("returns the run with the fastest pace from the set, in seconds", () => {
      expect(helpers.getRecordPaceRun(testRuns)).toEqual(testRuns["user1run2"]);
    });
  });
});
