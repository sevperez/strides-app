import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import * as firebase from "firebase";

// initialize firebase
const config = {
  apiKey: "AIzaSyDU23_P14_dRi6C9sGiadwtqcJ_EcJOXg0",
  authDomain: "strides-app.firebaseapp.com",
  databaseURL: "https://strides-app.firebaseio.com",
  projectId: "strides-app",
  storageBucket: "strides-app.appspot.com",
  messagingSenderId: "191999979223"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
