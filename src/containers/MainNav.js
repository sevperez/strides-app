import React from "react";

export const MainNav = () => (
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
        <p className="m-0">
          <small>
            <button
              onClick={(e) => {
                e.preventDefault();
                console.log("signing in!");
              }}
              type="button"
              className="btn btn-link nav-link dark-red"
              id="login"
            >
              <small>Sign In</small>
            </button>
          </small>
        </p>
      </div>
    </div>
  </nav>
);

export default MainNav;
