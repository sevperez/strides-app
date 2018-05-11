// HELPERS - index.js

import "../polyfills";

export const getDateInfo = (date) => {
  const dateOptions = { year: "numeric", month: "long", day: "numeric" };
  const dayOptions = { weekday: "long" };
  
  if (typeof date === "string") {
    date = new Date(date);
  }
  
  return {
    dateString: date.toLocaleDateString("en-US", dateOptions),
    dayString: date.toLocaleDateString("en-US", dayOptions),
  };
};

export const secondsToTimeString = seconds => {
  if (seconds >= 3600) {
    const timeHr = String(Math.floor(seconds / 60 / 60));
    const timeMin = String(Math.floor(seconds / 60 % 60)).padStart(2, "0");
    const timeSec = String(Math.floor(seconds % 60)).padStart(2, "0");
    
    return `${timeHr}:${timeMin}:${timeSec}`;
  }
  const timeMin = String(Math.floor(seconds / 60));
  const timeSec = String(Math.floor(seconds % 60)).padStart(2, "0");
  
  return `${timeMin}:${timeSec}`;
};

export const getStartDate = runs => {
  if (!Object.keys(runs).length) {
    return null;
  }
  
  const dates = Object.values(runs).map(run => run.date);
  const sortedDates = dates.sort((a, b) => {
    return a - b;
  });
  return sortedDates[0];
};

export const calculateTotalRuns = runs => {
  return Object.keys(runs).length;
};

export const getLongestRun = runs => {
  if (!Object.keys(runs).length) {
    return null;
  }
  
  const keys = Object.keys(runs);
  const keysSortedByRunLength = keys.sort((a, b) => {
    return runs[a].distance - runs[b].distance;
  });
  const longestRunKey = keysSortedByRunLength[keysSortedByRunLength.length - 1];
  return runs[longestRunKey];
};

export const calculateTotalDistance = runs => {
  if (!Object.keys(runs).length) {
    return null;
  }
  
  const distances = Object.keys(runs).map(runId => runs[runId].distance);
  return distances.reduce((acc, val) => acc + val);
};

export const calculateTotalTime = runs => {
  if (!Object.keys(runs).length) {
    return null;
  }
  
  const seconds = Object.keys(runs).map(runId => runs[runId].seconds);
  return seconds.reduce((acc, val) => acc + val);
};

export const calculateAveragePaceSeconds = runs => {
  if (!Object.keys(runs).length) {
    return null;
  }
  
  const totalSeconds = calculateTotalTime(runs);
  const totalDistance = calculateTotalDistance(runs);
  
  return totalSeconds / totalDistance;
};

export const getRecordPaceRun = runs => {
  if (!Object.keys(runs).length) {
    return null;
  }
  
  const keys = Object.keys(runs);
  const keysSortedByRunPace = keys.sort((a, b) => {
    const runAPace = runs[a].seconds / runs[a].distance;
    const runBPace = runs[b].seconds / runs[b].distance;
    return runAPace - runBPace;
  });
  const recordPaceKey = keysSortedByRunPace[0];
  return runs[recordPaceKey];
};
