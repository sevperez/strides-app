// API - index.js

import { v4 } from "uuid";
import { db } from "../firebase";

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

export const fetchRuns = (userId) => {
  return new Promise(resolve => {
    db.collection("users").doc(userId).collection("runs").get()
      .then(querySnapshot => {
        let runs = {};
        querySnapshot.forEach(doc => runs[doc.ref.id] = doc.data());
        if (runs) {
          resolve(runs);
        } else {
          throw new Error("Could not retreive runs");
        }
      });
  });
};

export const addRun = (userId, run) =>
  delay(500).then(() => {
    const runId = v4();
    fakeDatabase.users[userId].runs[runId] = run;
    return { 
      runId,
      run,
    };
  });
