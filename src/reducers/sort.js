// REDUCERS - sort.js

import { SET_SORT_ATTRIBUTE, TOGGLE_REVERSE } from "../actions/actionTypes";

export const sort = (state = "date", action) => {
  switch (action.type) {
    case SET_SORT_ATTRIBUTE:
      return action.attribute;
    default:
      return state;
  }
};

export const reverse = (state, action) => {
  switch (action.type) {
    case TOGGLE_REVERSE:
      if (state === undefined) {
        return false;
      } else {
        return !state;
      }
    default:
      return false;
  }
};
