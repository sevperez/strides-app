// REDUCERS

import { combineReducers } from "redux";
import runs from "./runs";
import { sort, reverse } from "./sort";

const rootReducer = combineReducers({
  runs,
  sort,
  reverse,
});

export default rootReducer;
