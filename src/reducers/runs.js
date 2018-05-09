// REDUCERS - runs.js

import { ADD_RUN, UPDATE_RUN, RECEIVE_RUNS } from "../actions/actionTypes";

const run = (state = {}, action) => {
  switch (action.type) {
    case ADD_RUN:
      return action.data;
    case UPDATE_RUN:
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
};

const runs = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_RUNS:
      return action.response;
    case ADD_RUN:
    case UPDATE_RUN:
      return { ...state, [action.id]: run(state[action.id], action) };
    default:
      return state;
  }
};
export default runs;

export const getSortedRunIds = (state = {}, sortAttribute) => {
  if (sortAttribute === "time") {
    sortAttribute = "seconds";
  }
  
  if (sortAttribute === "notes") {
    sortAttribute = "hasNotes";
  }
  
  const compare = (idA, idB) => {
    let runA = { ...state[idA] };
    let runB = { ...state[idB] };
    
    if (sortAttribute === "pace") {
      runA.pace = runA.seconds / runA.distance;
      runB.pace = runB.seconds / runB.distance;
    }
    
    if (sortAttribute === "day") {
      runA.day = new Date(runA.date).getDay();
      runB.day = new Date(runB.date).getDay();
    }
    
    if (sortAttribute === "hasNotes") {
      runA.hasNotes = !!runA.notes;
      runB.hasNotes = !!runB.notes;
    }
    
    if (runA[sortAttribute] === runB[sortAttribute]) {
      if (runA["date"] > runB["date"]) {
        return 1;
      } else if (runA["date"] < runB["date"]) {
        return -1;
      } else {
        return 0;
      }
    }
    
    if (runA[sortAttribute] > runB[sortAttribute]) {
      return 1;
    } else if (runA[sortAttribute] < runB[sortAttribute]) {
      return -1;
    } else {
      return 0;
    }
  };
  
  return Object.keys(state).sort(compare);
};
