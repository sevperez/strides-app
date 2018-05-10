// REDUCERS

import { combineReducers } from "redux";
import createRunList, * as fromRuns from "./runs";
import { sort, reverse } from "./sort";

const rootReducer = combineReducers({
  runList: createRunList(),
  sort,
  reverse,
});

export default rootReducer;

export const getSortedRunIds = (state, sortAttribute) =>
  fromRuns.getSortedRunIds(state.runs, sortAttribute);

export const getIsFetching = (state) =>
  fromRuns.getIsFetching(state);

export const getErrorMessage = (state) =>
  fromRuns.getErrorMessage(state);
