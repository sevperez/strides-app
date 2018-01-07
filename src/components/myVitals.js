import React from "react";
import _ from "underscore";

const MyVitals = (props) => {
  if (!props.runs) {
    return (
      <div className="row border border-top-0 border-right-0 border-left-0 p-3 pb-4 mb-3">
        <h3>Vitals</h3>
        <div className="container">
          <div className="row">
            <p>Loading...</p>
          </div>
        </div>
      </div>
    );
  }
  
  // Longest Run
  const dateOptions = { year: "numeric", month: "long", day: "numeric" };
  const maxDistanceKey = _.max(Object.keys(props.runs), key => {
    return props.runs[key].distance;
  });
  const maxDistance = (props.runs[maxDistanceKey].distance).toFixed(2);
  const maxDistanceDate = new Date(props.runs[maxDistanceKey].date).toLocaleDateString("en-US", dateOptions);
  
  // Record Pace
  const recordPaceKey = _.min(Object.keys(props.runs), key => {
    return props.runs[key].seconds / props.runs[key].distance;
  });
  const recordPace = props.runs[recordPaceKey].seconds / props.runs[recordPaceKey].distance;
  const recordPaceMin = Math.floor(recordPace / 60);
  const recordPaceSec = String(Math.floor(recordPace % 60)).padStart(2, "0");
  const recordPaceDate = new Date(props.runs[recordPaceKey].date).toLocaleDateString("en-US", dateOptions);
  
  // Total Time
  const allSeconds = _.map(Object.keys(props.runs), key => { 
    return props.runs[key].seconds;
  });
  const totalSeconds = allSeconds.reduce(function(sum, val) { 
    return sum += val;
  }, 0);
  const totalMin = Math.floor(totalSeconds / 60);
  const timeHr = Math.floor(totalMin / 60);
  const timeMin = String(totalMin % 60).padStart(2, "0");
  const timeSec = String(totalSeconds % 60).padStart(2, "0");
  const firstRunKey = _.min(Object.keys(props.runs), key => {
    return new Date(props.runs[key].date);
  });
  const firstRunDate = new Date(props.runs[firstRunKey].date).toLocaleDateString("en-US", dateOptions);
  
  // Total Distance
  const allMiles = _.map(Object.keys(props.runs), key => { 
    return props.runs[key].distance;
  });
  const totalMiles = allMiles.reduce(function(sum, val) {
    return sum += val;
  }, 0);
  
  return (
    <div className="row border border-top-0 border-right-0 border-left-0 p-3 pb-4 mb-3">
      <h3>Vitals</h3>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <dl>
              <dt>Total Distance:</dt>
              <dd>
                <p className="mb-0">{totalMiles} miles</p>
                <p className="mb-0 text-secondary"><small>Since {firstRunDate}</small></p>
              </dd>
            </dl>
          </div>
          <div className="col-3">
            <dl>
              <dt>Total Time:</dt>
              <dd>
                <p className="mb-0">{`${timeHr} hrs ${timeMin} min ${timeSec} sec`}</p>
                <p className="mb-0 text-secondary"><small>Since {firstRunDate}</small></p>
              </dd>
            </dl>
          </div>
          <div className="col-3">
            <dl>
              <dt>Longest Run:</dt>
              <dd>
                <p className="mb-0">{maxDistance} miles</p>
                <p className="mb-0 text-secondary"><small>{maxDistanceDate}</small></p>
              </dd>
            </dl>
          </div>
          <div className="col-3">
            <dl>
              <dt>Record Pace:</dt>
              <dd>
                <p className="mb-0">{`${recordPaceMin}:${recordPaceSec} min/mile`}</p>
                <p className="mb-0 text-secondary"><small>{recordPaceDate}</small></p>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyVitals;
