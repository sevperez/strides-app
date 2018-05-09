// ACTION CREATORS - index.js

import { ADD_RUN, SET_SORT_ATTRIBUTE, TOGGLE_REVERSE } from "./actionTypes";

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
