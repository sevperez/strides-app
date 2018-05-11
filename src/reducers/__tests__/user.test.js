// TEST - user.test.js

import deepfreeze from "deepfreeze";

import reducer from "../user";

describe("runs reducer", () => {
  it("should return the initial state", () => {
    expect(reducer({}, {})).toEqual({});
  });
});
