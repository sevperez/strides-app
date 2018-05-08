// REDUCERS - runs.js

import { ADD_RUN, UPDATE_RUN } from "../actions/actionTypes";

const sampleData = {
  "user1run1": {
      date: new Date("2018-05-01"),
      distance: 2.45,
      seconds: 1500,
      notes: "",
    },
    "user1run2": {
      date: new Date("2018-05-03"),
      distance: 2.65,
      seconds: 1600,
      notes: "",
    },
    "user1run3": {
      date: new Date("2018-05-05"),
      distance: 2.95,
      seconds: 1800,
      notes: "",
    }
};

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

const runs = (state = sampleData, action) => {
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
