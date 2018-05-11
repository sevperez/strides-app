import React from "react";

export const MainNav = () => (
  <nav className="navbar navbar-expand-lg navbar-light mb-4">
    <a 
      className="navbar-brand p-0"
      href="#"
    >
      <img src="/images/shoe_logo_small.png" alt="strides logo" />
    </a>
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
          <a
            className="nav-link"
            href="#"
          >
            My Runs <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Profile</a>
        </li>
      </ul>
      <div className="navbar-text p-0">
        <p className="m-0">
          <small>Not Signed In</small>
        </p>
        <p className="m-0">
          <small>
            <a 
              onClick={(e) => {
                e.preventDefault();
                console.log("signing in!");
              }}
              href="#"
              id="login"
            >
              Sign In
            </a>
          </small>
        </p>
      </div>
    </div>
  </nav>
);

export default MainNav;
