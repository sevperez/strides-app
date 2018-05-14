import * as firebase from "firebase";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDU23_P14_dRi6C9sGiadwtqcJ_EcJOXg0",
  authDomain: "strides-app.firebaseapp.com",
  databaseURL: "https://strides-app.firebaseio.com",
  projectId: "strides-app",
  storageBucket: "strides-app.appspot.com",
  messagingSenderId: "191999979223"
};
firebase.initializeApp(config);

export const db = firebase.firestore();
export const auth = firebase.auth();
