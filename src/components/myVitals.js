import React from "react";
import _ from "underscore";

const MyVitals = (props) => {
  if (!props.runs) {
    return (
      <div className="row border border-top-0 border-right-0 border-left-0 p-3 pb-4 mb-3">
        <h3>Vitals</h3>
        <div className="container">
          <div className="row">
            <p>No vitals yet...</p>
          </div>
        </div>
      </div>
    );
  }
  
  // Collect run data
  let runData = [];
  _.each(Object.keys(props.runs), key => { runData.push(props.runs[key])});
  
  // Longest Run
  const dateOptions = { year: "numeric", month: "long", day: "numeric" };
  const maxDistanceRun = _.max(runData, function(run) {
    return run.distance;
  });
  const maxDistance = maxDistanceRun.distance;
  const maxDistanceDate = new Date(maxDistanceRun.date).toLocaleDateString("en-US", dateOptions);
  
  // Record Pace
  const recordPaceRun = _.min(runData, function(run) {
    return run.seconds / run.distance;
  });
  const recordPace = recordPaceRun.seconds / recordPaceRun.distance;
  const recordPaceMin = Math.floor(recordPace / 60);
  const recordPaceSec = String(Math.floor(recordPace % 60)).padStart(2, "0");
  const recordPaceDate = new Date(recordPaceRun.date).toLocaleDateString("en-US", dateOptions);
  
  // Total Time
  const totalSeconds = _.reduce(runData, function(sum, run) {
    return sum + run.seconds;
  }, 0);
  const totalMin = Math.floor(totalSeconds / 60);
  const timeHr = Math.floor(totalMin / 60);
  const timeMin = totalMin % 60;
  const timeSec = totalSeconds % 60;
  
  // First Run
  const firstRun = _.min(runData, run => {
    return new Date(run.date);
  });
  const firstRunDate = new Date(firstRun.date).toLocaleDateString("en-US", dateOptions);
  
  // Total Distance
  const totalMiles = _.reduce(runData, function(sum, run) {
    return sum + run.distance;
  }, 0);
  
  // Average Pace
  const avgPace = totalSeconds / totalMiles;
  const avgPaceMin = Math.floor(avgPace / 60);
  const avgPaceSec = String(Math.floor(avgPace % 60)).padStart(2, "0");
  
  return (
    <div className="row border border-top-0 border-right-0 border-left-0 p-3 pb-4 mb-3">
      <h3>Vitals</h3>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <dl>
              <dt>Total Runs</dt>
              <dd>
                <p className="mb-0">{runData.length} runs</p>
                <p className="mb-0 text-secondary"><small>Since {firstRunDate}</small></p>
              </dd>
            </dl>
          </div>
          <div className="col-4">
            <dl>
              <dt>Total Distance:</dt>
              <dd>
                <p className="mb-0">{totalMiles.toFixed(2)} miles</p>
                <p className="mb-0 text-secondary"><small>Since {firstRunDate}</small></p>
              </dd>
            </dl>
          </div>
          <div className="col-4">
            <dl>
              <dt>Total Time:</dt>
              <dd>
                <p className="mb-0">{`${timeHr} hrs ${timeMin} min ${timeSec} sec`}</p>
                <p className="mb-0 text-secondary"><small>Since {firstRunDate}</small></p>
              </dd>
            </dl>
          </div>
          <div className="col-4">
            <dl>
              <dt>Longest Run:</dt>
              <dd>
                <p className="mb-0">{maxDistance} miles</p>
                <p className="mb-0 text-secondary"><small>{maxDistanceDate}</small></p>
              </dd>
            </dl>
          </div>
          <div className="col-4">
            <dl>
              <dt>Average Pace:</dt>
              <dd>
                <p className="mb-0">{`${avgPaceMin}:${avgPaceSec} min/mile`}</p>
                <p className="mb-0 text-secondary"><small>Since {firstRunDate}</small></p>
              </dd>
            </dl>
          </div>
          <div className="col-4">
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
