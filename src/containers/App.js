import React, { Component } from "react";
import { connect } from "react-redux";
import { getIsFetching } from "../reducers";
import { fetchRuns } from "../actions";
import RunTable from "./RunTable";
import Vitals from "./Vitals";
import LoadingIndicator from "../components/LoadingIndicator";

const mapStateToProps = (state) => ({
  user: state.userInfo.user,
  isFetching: getIsFetching(state.runList, "runs"),
});

export class App extends Component {
  componentDidMount() {
    this.fetchData();
  }
  
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
  
  fetchData() {
    const { fetchRuns, user } = this.props;
    if (user.uid) {
      fetchRuns(user.uid);
    }
  }
  
  render() {
    const { isFetching } = this.props;
    
    return (
      <div className="container pt-3 pb-5">
        { isFetching
          ? <div className="py-3">
              <LoadingIndicator />
            </div>
          : <div>
              <Vitals />
              <RunTable />
            </div>
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, { fetchRuns })(App);
