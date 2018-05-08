// API - index.js

import { uuidv4 } from "uuid/v4";

const fakeDatabase = {
  users: {
    "user1": {
      runs: {
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
          notes: "",
        },
        "user1run3": {
          date: new Date("2018-05-05"),
          distance: 2.95,
          seconds: 1800,
          notes: "",
        }
      }
    }
  },
};

export const fetchRuns = (userId) => {
  return fakeDatabase.users[userId].runs;
};

export const addRun = (userId, run) => {
  const runId = uuidv4();
  fakeDatabase.users[userId].runs[runId] = run;
  return run;
};

