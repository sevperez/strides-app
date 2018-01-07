import React, { Component } from "react";
import MyVitals from "./myVitals.js";
import NewRunForm from "./newRunForm.js";
import RunList from "./runList.js";

class MyRuns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      runs: undefined,
    };
    
    this.handleNewRun = this.handleNewRun.bind(this);
  }
  
  componentDidMount() {
    const userRunsRef = this.props.db.ref(`users/${this.props.currentUser.uid}/runs`);
    userRunsRef.on("value", snap => {
      this.setState({
        runs: snap.val(),
      });
    });
  }
  
  handleNewRun(runData) {
    const userRunsRef = this.props.db.ref(`users/${this.props.currentUser.uid}/runs`);
    const newRunRef = userRunsRef.push();
    newRunRef.set(runData);
  }
  
  render() {
    return (
      <div className="container">
        <MyVitals runs={this.state.runs} />
        <NewRunForm handleNewRun={this.handleNewRun} />
        <RunList runs={this.state.runs} />
      </div>
    );
  }
}

export default MyRuns;