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

export const reverse = (state = true, action) => {
  switch (action.type) {
    case TOGGLE_REVERSE:
      if (state === undefined) {
        return true;
      } else {
        return !state;
      }
    case SET_SORT_ATTRIBUTE:
      if (state === true) {
        return false;
      } else {
        return state;
      }
    default:
      return state;
  }
};
