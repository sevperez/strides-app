import React, { Component } from "react";
import { connect } from "react-redux";
import { getIsFetching } from "../reducers";
import * as actions from "../actions";

import Banner from "../components/Banner";
import LoadingIndicator from "../components/LoadingIndicator";

const mapStateToProps = (state) => ({
  user: state.userInfo.user,
  isFetching: getIsFetching(state.userInfo, "user")
});

export class Login extends Component {
  componentDidMount() {
    this.fetchData();
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.user.email !== undefined) {
      nextProps.history.push("/my-runs");
    }
  }
  
  fetchData() {
    const { fetchUser } = this.props;
    fetchUser();
  }
  
  render() {
    const { isFetching, loginWithGoogle } = this.props;
    
    if (isFetching) {
      return <LoadingIndicator />;
    }
    
    return (
      <div className="container main-header">
        <Banner />
        <div className="text-center">
          <button
            type="button"
            className="btn primary-btn-outline py-2 px-3"
            onClick={loginWithGoogle}
          >
            <i className="fa fa-google mr-2" aria-hidden="true"></i>
            Sign in with Google
          </button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, actions)(Login);
