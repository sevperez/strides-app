// ACTION CREATORS - index.js

import { ADD_RUN, SET_SORT_ATTRIBUTE } from "./actionTypes";

export const addRun = (id, data) => ({
  type: ADD_RUN,
  id,
  data,
});

export const setSortAttribute = (attribute) => ({
  type: SET_SORT_ATTRIBUTE,
  attribute,
});
