// ACTION CREATORS - index.js

import { ADD_RUN } from "./actionTypes";

export const addRun = (id, data) => ({
  type: ADD_RUN,
  id,
  data,
});
