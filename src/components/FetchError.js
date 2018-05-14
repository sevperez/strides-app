import React from "react";

const FetchError = ({ message, onRetry }) => (
  <div className="alert alert-danger clearfix" role="alert">
    <h5 className="alert-heading">Ack!</h5>
    <p>That can't be good... {message}</p>
    <hr />
    <button
      className="btn btn-danger btn-sm float-right"
      onClick={onRetry}
    >
      Retry
    </button>
  </div>
);

export default FetchError;
