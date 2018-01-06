import React from "react";

const MyVitals = (props) => {
  return (
    <div className="row border border-top-0 border-right-0 border-left-0 p-3 pb-4 mb-3">
      <h3>Vitals</h3>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <dl>
              <dt>Total Distance:</dt>
              <dd>
                <p className="mb-0">58.6 miles</p>
                <p className="mb-0 text-secondary"><small>Since January 1, 2018</small></p>
              </dd>
            </dl>
          </div>
          <div className="col-3">
            <dl>
              <dt>Total Time:</dt>
              <dd>
                <p className="mb-0">32 hrs 18 min 45 sec</p>
                <p className="mb-0 text-secondary"><small>Since January 1, 2018</small></p>
              </dd>
            </dl>
          </div>
          <div className="col-3">
            <dl>
              <dt>Longest Run:</dt>
              <dd>
                <p className="mb-0">4.6 miles</p>
                <p className="mb-0 text-secondary"><small>January 15, 2018</small></p>
              </dd>
            </dl>
          </div>
          <div className="col-3">
            <dl>
              <dt>Record Pace:</dt>
              <dd>
                <p className="mb-0">7:35 min/mile</p>
                <p className="mb-0 text-secondary"><small>February 18, 2018</small></p>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyVitals;
