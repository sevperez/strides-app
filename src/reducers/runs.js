// REDUCERS - runs.js

import { ADD_RUN, UPDATE_RUN } from "../actions/actionTypes";

const run = (state = {}, action) => {
  switch (action.type) {
    case ADD_RUN:
      return action.data;
    case UPDATE_RUN:
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
};

const runs = (state = {}, action) => {
  switch (action.type) {
    case ADD_RUN:
      return { ...state, [action.id]: run(undefined, action) };
    case UPDATE_RUN:
      return { ...state, [action.id]: run(state[action.id], action) };
    default:
      return state;
  }
};

export default runs;
