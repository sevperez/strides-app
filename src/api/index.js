// API - index.js

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
          notes: "some notes!",
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

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const fetchRuns = (userId) =>
  delay(500).then(() => {
    if (fakeDatabase.users[userId]) {
      return fakeDatabase.users[userId].runs;
    } else {
      throw new Error(`Unknown userId: ${userId}`);
    }
  });

