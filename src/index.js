import "./polyfills";
import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import * as firebase from "firebase";

import { createStore } from "redux";
import rootReducer from "./reducers";

// Initialize firebase
const config = {
  apiKey: "AIzaSyDU23_P14_dRi6C9sGiadwtqcJ_EcJOXg0",
  authDomain: "strides-app.firebaseapp.com",
  databaseURL: "https://strides-app.firebaseio.com",
  projectId: "strides-app",
  storageBucket: "strides-app.appspot.com",
  messagingSenderId: "191999979223"
};
firebase.initializeApp(config);

const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
