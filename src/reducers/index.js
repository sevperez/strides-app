// REDUCERS

import { combineReducers } from "redux";
import runs, * as fromRuns from "./runs";
import { sort, reverse } from "./sort";

const rootReducer = combineReducers({
  runs,
  sort,
  reverse,
});

export default rootReducer;

export const getSortedRunIds = (state, sortAttribute) =>
  fromRuns.getSortedRunIds(state.runs, sortAttribute);

