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
      it("returns an MM:SS string (padded with zeros)", () => {
        const seconds = 150;
        const expectedOutput = "02:30";
        expect(helpers.secondsToTimeString(seconds)).toEqual(expectedOutput);
      });
      
      it("returns an MM:SS string (unpadded with zeros)", () => {
        const seconds = 1650;
        const expectedOutput = "27:30";
        expect(helpers.secondsToTimeString(seconds)).toEqual(expectedOutput);
      });
    });
    
    describe("time > 1 hr", () => {
      it("returns an HH:MM:SS string (padded with zeros)", () => {
        const seconds = 4050;
        const expectedOutput = "01:07:30";
        expect(helpers.secondsToTimeString(seconds)).toEqual(expectedOutput);
      });
      
      it("returns an HH:MM:SS string (unpadded with zeros)", () => {
        const seconds = 59050;
        const expectedOutput = "16:24:10";
        expect(helpers.secondsToTimeString(seconds)).toEqual(expectedOutput);
      });
    });
  });
});
