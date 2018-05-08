// REDUCERS - sort.js

import { SET_SORT_ATTRIBUTE } from "../actions/actionTypes";

const sortAttribute = (state = "DATE", action) => {
  switch (action.type) {
    case SET_SORT_ATTRIBUTE:
      return action.attribute;
    default:
      return state;
  }
};

export default sortAttribute;
