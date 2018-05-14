// REDUCERS - user.js

import { combineReducers } from "redux";

import { FETCH_USER_REQUEST,
         FETCH_USER_SUCCESS,
         FETCH_USER_ERROR } from "../actions/actionTypes";

const getUserInfo = () => {
  const user = (state = {}, action) => {
    switch(action.type) {
      case FETCH_USER_SUCCESS:
        return action.user;
      case FETCH_USER_ERROR:
        return {};
      default:
        return state;
    }
  };
  
  const isFetching = (state = true, action) => {
    switch (action.type) {
      case FETCH_USER_REQUEST:
        return true;
      case FETCH_USER_SUCCESS:
      case FETCH_USER_ERROR:
        return false;
      default:
        return state;
    }
  };
  
  return combineReducers({
    user,
    isFetching,
  });
};
export default getUserInfo;

export const getIsFetching = (state) => state.isFetching;
