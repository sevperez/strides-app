// REDUCERS

import { combineReducers } from "redux";
import runs from "./runs";
import sort from "./sort";

const rootReducer = combineReducers({
  runs,
  sort,
});

export default rootReducer;
