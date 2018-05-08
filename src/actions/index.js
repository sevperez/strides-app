// ACTION CREATORS - index.js

import { ADD_RUN } from "./actionTypes";

export const addRun = (id, data) => {
  return {
    type: ADD_RUN,
    id,
    data,
  };
};
