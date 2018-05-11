import React from 'react';

const Banner = () => (
  <header className="container py-3">
    <div className="jumbotron bg-light border">
      <img
        src="images/shoe_logo_small.png"
        className="rounded float-left mr-4"
        alt="footprint logo"
      />
      <h1 className="display-4">Strides</h1>
      <p className="lead">Run tracking, made simple.</p>
      <hr />
      <p>Data for the statistics-minded runner.</p>
    </div>
  </header>
);

export default Banner;
