import "./polyfills";
import React from "react";
import ReactDOM from "react-dom";
import * as firebase from "firebase";
import registerServiceWorker from "./registerServiceWorker";

import "./index.css";
import Root from "./components/Root";
import configureStore from "./configureStore";

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

const store = configureStore();

ReactDOM.render(
  <Root store={store} />,
  document.getElementById("root")
);
registerServiceWorker();
