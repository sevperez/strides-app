// ACTION CREATORS - index.js

import * as api from "../api";
import { ADD_RUN,
         SET_SORT_ATTRIBUTE,
         TOGGLE_REVERSE,
         RECEIVE_RUNS } from "./actionTypes";

export const addRun = (id, data) => ({
  type: ADD_RUN,
  id,
  data,
});

export const setSortAttribute = (attribute) => ({
  type: SET_SORT_ATTRIBUTE,
  attribute,
});

export const toggleReverse = () => ({
  type: TOGGLE_REVERSE,
});

export const receiveRuns = (response) => ({
  type: RECEIVE_RUNS,
  response,
});

export const fetchRuns = (userId) =>
  api.fetchRuns(userId).then(response =>
    receiveRuns(response)
  );