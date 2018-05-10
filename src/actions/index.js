// ACTION CREATORS - index.js

import * as api from "../api";
import { ADD_RUN,
         ADD_RUN_SUCCESS,
         SET_SORT_ATTRIBUTE,
         TOGGLE_REVERSE,
         FETCH_RUNS_REQUEST,
         FETCH_RUNS_SUCCESS,
         FETCH_RUNS_ERROR } from "./actionTypes";

export const addRun = (userId, run) => (dispatch) =>
  api.addRun(userId, run).then(response => {
    dispatch({
      type: ADD_RUN_SUCCESS,
      response,
    });
  });

export const setSortAttribute = (attribute) => ({
  type: SET_SORT_ATTRIBUTE,
  attribute,
});

export const toggleReverse = () => ({
  type: TOGGLE_REVERSE,
});

export const requestRuns = () => ({
  type: FETCH_RUNS_REQUEST,
});

export const receiveRuns = (response) => ({
  type: FETCH_RUNS_SUCCESS,
  response,
});

export const fetchRuns = (userId) => (dispatch) => {
  dispatch(requestRuns());

  return api.fetchRuns(userId).then(
    response => {
      dispatch(receiveRuns(response));
    },
    error => {
      dispatch({
        type: FETCH_RUNS_ERROR,
        message: error.message || "Something went wrong."
      });
    }
  );
};
