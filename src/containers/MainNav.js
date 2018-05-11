import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

const mapStateToProps = (state) => ({
  user: state.userInfo.user
});

export const MainNav = (props) => (
  <nav className="navbar navbar-expand-lg navbar-light mb-4">
    <button 
      className="btn btn-link navbar-brand p-0"
      type="button"
    >
      <img 
        className="pr-2"
        src="/images/shoe_logo_small.png"
        alt="strides logo"
      />
      <span>Strides</span>
    </button>
    <button 
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div
      className="collapse navbar-collapse"
      id="navbarText"
    >
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <button
            className="btn btn-link nav-link"
            type="button"
          >
            My Runs <span className="sr-only">(current)</span>
          </button>
        </li>
      </ul>
      <div className="navbar-text p-0">
        { props.user.email
          ? <div className="m-0 clearfix">
              <small className="w-100 d-block">{props.user.email}</small>
              <small>
                <button
                  onClick={props.logOut}
                  type="button"
                  className="btn btn-link nav-link dark-red p-0 float-lg-right"
                >
                  <i className="fa fa-sign-out mr-2" aria-hidden="true"></i>
                  <small>Sign Out</small>
                </button>
              </small>
            </div>
          : <div className="m-0">
              <small>
                <button
                  onClick={props.loginWithGoogle}
                  type="button"
                  className="btn btn-link nav-link dark-red"
                >
                  <i className="fa fa-google mr-2" aria-hidden="true"></i>
                  <small>Log in with Google</small>
                </button>
              </small>
            </div>
        }
      </div>
    </div>
  </nav>
);

export default connect(mapStateToProps, actions)(MainNav);
