import React, { Component } from "react";
import "./App.css";
import * as firebase from "firebase";

// Import Components
import Banner from "./components/banner.js";
import Login from "./components/login.js";
import MainNav from "./components/mainNav.js";
import MyRuns from "./components/myRuns.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: undefined,
      auth: firebase.auth(),
      db: firebase.database(),
    };
    
    this.handleSignin = this.handleSignin.bind(this);
    this.handleGoogleSignin = this.handleGoogleSignin.bind(this);
    this.handleSignout = this.handleSignout.bind(this);
    this.handleCreateAccount = this.handleCreateAccount.bind(this);
  }
  
  componentDidMount() {
    const self = this;
    
    // setup realtime auth listener
    this.state.auth.onAuthStateChanged(function(firebaseUser) {
      if (firebaseUser) {
        console.log("logged in: ", firebaseUser);
        self.setState({ currentUser: firebaseUser });
      } else {
        console.log("not logged in");
        self.setState({ currentUser: undefined });
      }
    });
  }
  
  handleCreateAccount(email, password) {
    const promise = this.state.auth.createUserWithEmailAndPassword(email, password);
    
    promise.catch(function(e) {
      console.log(e.message);
    });
  }
  
  handleSignin(email, password) {
    console.log("Signing in in with email...");
    
    const promise = this.state.auth.signInWithEmailAndPassword(email, password);
    
    promise.catch(function(e) {
      console.log(e.message);
    });
  }
  
  handleGoogleSignin() {
    console.log("Signing in in with Google...");
    const google = new firebase.auth.GoogleAuthProvider();
    this.state.auth.signInWithPopup(google);
  }
  
  handleSignout(e) {
    e.preventDefault();
    
    this.state.auth.signOut();
  }
  
  render() {
    if (this.state.currentUser) {
      return (
        <div>
          <MainNav 
            currentUser={this.state.currentUser}
            handleSignout={this.handleSignout}
          />
          <MyRuns
            currentUser={this.state.currentUser}
          />
        </div>
      );
    } else {
      return (
        <div>
          <Banner />
          <Login 
            handleSignin={this.handleSignin}
            handleGoogleSignin={this.handleGoogleSignin}
            handleCreateAccount={this.handleCreateAccount}
          />
        </div>
      );
    }
  }
}

export default App;
