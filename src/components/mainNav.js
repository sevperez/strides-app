import React from "react";

const MainNav = ({ currentUser, handleSignout }) => {
  const email = currentUser.email;
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light mb-4">
      <a className="navbar-brand p-0" href="#"><img src="/images/shoe_logo_small.png" alt="strides logo" /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">My Runs <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Profile</a>
          </li>
        </ul>
        <div className="navbar-text p-0">
          <p className="m-0"><small>Signed in as: {email}</small></p>
          <p className="m-0"><small><a onClick={(e) => handleSignout(e)} href="#" id="logout">Sign Out</a></small></p>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;