// TESTS - helpers.test.js

import "../../polyfills";
import * as helpers from "../";

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
});
