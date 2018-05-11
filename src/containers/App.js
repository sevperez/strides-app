import React, { Component } from "react";
import { connect } from "react-redux";
import RunTable from "./RunTable";
import NewRunForm from "./NewRunForm";
import Vitals from "./Vitals";

const mapStateToProps = (state) => ({
  user: state.userInfo.user,
});

export class App extends Component {
  componentWillMount() {
    if (this.props.user.email === undefined) {
      this.props.history.replace("/");
    }
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.user.email === undefined) {
      nextProps.history.replace("/");
    }
  }
  
  render() {
    return (
      <div className="container py-3">
        <Vitals />
        <NewRunForm />
        <RunTable />
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
