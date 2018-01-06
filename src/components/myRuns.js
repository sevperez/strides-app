import React, { Component } from "react";
import MyVitals from "./myVitals.js";
import NewRunForm from "./newRunForm.js";

class MyRuns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  
  render() {
    return (
      <div className="container">
        <MyVitals />
        <NewRunForm />
      </div>
    );
  }
}

export default MyRuns;