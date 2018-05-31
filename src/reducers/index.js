// REDUCERS

import { combineReducers } from "redux";
import createRunList, * as fromRuns from "./runs";
import getUserInfo, * as fromUser from "./user";
import { sort, reverse } from "./sort";

const rootReducer = combineReducers({
  userInfo: getUserInfo(),
  runList: createRunList(),
  sort,
  reverse,
});

export default rootReducer;

export const getSortedRunIds = (state, sortAttribute, reverse) =>
  fromRuns.getSortedRunIds(state.runs, sortAttribute, reverse);

export const getIsFetching = (state, type) => {
  switch (type) {
    case "runs":
      return fromRuns.getIsFetching(state);
    case "user":
      return fromUser.getIsFetching(state);
    default:
      return state;
  }
};

export const getErrorMessage = (state) =>
  fromRuns.getErrorMessage(state);
