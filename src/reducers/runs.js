// REDUCERS - runs.js

import { combineReducers } from "redux";
import { FETCH_RUNS_REQUEST,
         FETCH_RUNS_SUCCESS,
         FETCH_RUNS_ERROR,
         ADD_RUN_SUCCESS,
         FETCH_USER_SUCCESS,
         DELETE_RUN_SUCCESS } from "../actions/actionTypes";

const run = (state = {}, action) => {
  switch (action.type) {
    case ADD_RUN_SUCCESS:
      return action.response.run;
    default:
      return state;
  }
};

const createRunList = () => {
  const runs = (state = {}, action) => {
    switch (action.type) {
      case FETCH_RUNS_SUCCESS:
        return action.response;
      case ADD_RUN_SUCCESS:
        return { 
          ...state,
          [action.response.runId]: run(state[action.response.runId], action),
        };
      case DELETE_RUN_SUCCESS:
        let newState = {};
        Object.keys(state).forEach((key) => {
          if (key !== action.response) {
            newState[key] = state[key];
          }
        });
        
        return newState;
      default:
        return state;
    }
  };
  
  const isFetching = (state = false, action) => {
    switch (action.type) {
      case FETCH_RUNS_REQUEST:
      case FETCH_USER_SUCCESS:
        return true;
      case FETCH_RUNS_SUCCESS:
      case FETCH_RUNS_ERROR:
        return false;
      default:
        return state;
    }
  };
  
  const errorMessage = (state = null, action) => {
    switch (action.type) {
      case FETCH_RUNS_ERROR:
        return action.message;
      case FETCH_RUNS_REQUEST:
      case FETCH_RUNS_SUCCESS:
        return null;
      default:
        return state;
    }
  };
  
  return combineReducers({
    runs,
    isFetching,
    errorMessage,
  });
};
export default createRunList;

export const getSortedRunIds = (state = {}, sortAttribute, reverse) => {
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
  
  const runIds = Object.keys(state).sort(compare);
  
  if (reverse) {
    return runIds.reverse();
  } else {
    return runIds;
  }
};

export const getIsFetching = (state) => state.isFetching;
export const getErrorMessage = (state) => state.errorMessage;
