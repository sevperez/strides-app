// ACTION CREATORS - index.js

import * as api from "../api";
import * as firebase from "firebase";
import { auth } from "../firebase";

import { SET_SORT_ATTRIBUTE,
         TOGGLE_REVERSE,
         FETCH_RUNS_REQUEST,
         FETCH_RUNS_SUCCESS,
         FETCH_RUNS_ERROR,
         ADD_RUN_SUCCESS,
         FETCH_USER_SUCCESS,
         FETCH_USER_ERROR } from "./actionTypes";

export const addRun = (userId, run) => (dispatch) =>
  api.addRun(userId, run).then(response => {
    dispatch({
      type: ADD_RUN_SUCCESS,
      response,
    });
  });

export const setSortAttribute = (attribute) => ({
  type: SET_SORT_ATTRIBUTE,
  attribute,
});

export const toggleReverse = () => ({
  type: TOGGLE_REVERSE,
});

export const requestRuns = () => ({
  type: FETCH_RUNS_REQUEST,
});

export const receiveRuns = (response) => ({
  type: FETCH_RUNS_SUCCESS,
  response,
});

export const fetchRuns = (userId) => (dispatch) => {
  dispatch(requestRuns());
  return api.fetchRuns(userId).then(
    response => {
      dispatch(receiveRuns(response));
    },
    error => {
      dispatch({
        type: FETCH_RUNS_ERROR,
        message: error.message || "Something went wrong."
      });
    }
  );
};

export const fetchUser = () => {
  return dispatch => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch({
          type: FETCH_USER_SUCCESS,
          user,
        });
      } else {
        dispatch({
          type: FETCH_USER_ERROR
        });
      }
    });
  };
};

export const loginWithGoogle = () => {
  return dispatch => {
    const google = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(google);
  };
};

export const logOut = () =>
  dispatch => auth.signOut();
