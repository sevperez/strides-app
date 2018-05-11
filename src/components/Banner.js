import React from 'react';

const Banner = () => (
  <div className="jumbotron bg-none mb-0 py-3">
    <div className="logo-banner mx-auto">
      <img
        src="images/shoe_logo_small.png"
        className="rounded float-left mr-4"
        alt="footprint logo"
      />
      <h1 className="display-4">Strides</h1>
      <p className="lead">Run tracking, made simple.</p>
    </div>
    <hr />
    <p className="text-center">
      A simple data logger for the statistics-minded runner.
    </p>
  </div>
);

export default Banner;
