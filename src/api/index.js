// API - index.js

import { db } from "../firebase";

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

export const addRun = (userId, run) => {
  return new Promise(resolve => {
    const userRunsRef = db.collection("users").doc(userId).collection("runs");
    userRunsRef.add(run)
      .then(docRef => {
        const runId = docRef.id;
        
        if (runId && Object.keys(run).length) {
          resolve({ runId, run });
        } else {
          throw new Error("Could not add run");
        }
      });
  });
};
