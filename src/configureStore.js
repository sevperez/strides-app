// configureStore.js

import { createStore } from "redux";
import { loadState, saveState } from "./localStorage";
import rootReducer from "./reducers";

const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(rootReducer, persistedState);
  
  store.subscribe(() => {
    saveState({
      runs: store.getState().runs,
    });
  });
  
  return store;
};

export default configureStore;
