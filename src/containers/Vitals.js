import React from "react";
import { connect } from "react-redux";
import * as helpers from "../helpers";

const mapStateToProps = (state) => ({
  runs: state.runList.runs,
});

export const Vitals = ({ runs }) => {
  let startDateStr, 
      longestRun,
      longestRunDateStr,
      totalTime,
      avgPace,
      recordPaceStr,
      recordPaceDateStr;
      
  const hasRuns = !!Object.keys(runs).length;
      
  if (hasRuns) {
    const startDate = helpers.getStartDate(runs);
    startDateStr = startDate ? helpers.getDateInfo(startDate).dateString : null;
    
    longestRun = helpers.getLongestRun(runs);
    longestRunDateStr = helpers.getDateInfo(longestRun.date).dateString;
    
    totalTime = helpers.calculateTotalTime(runs);
    avgPace = helpers.calculateAveragePaceSeconds(runs);
    
    const recordPaceRun = helpers.getRecordPaceRun(runs);
    const recordPace = recordPaceRun.seconds / recordPaceRun.distance;
    recordPaceStr = helpers.secondsToTimeString(recordPace);
    recordPaceDateStr = helpers.getDateInfo(recordPaceRun.date).dateString;
  }
  
  return (
    <div className="p-3">
      <h3 className="mb-2">
        <i className="fa fa-line-chart mr-3 dark-red" aria-hidden="true"></i>
        My Vitals
      </h3>
        { hasRuns
          ? <div className="row">
              <div className="col-4">
                <dl>
                  <dt>Total Runs</dt>
                  <dd>
                    <p className="mb-0">
                      {helpers.calculateTotalRuns(runs)} runs
                    </p>
                    <p className="mb-0 text-secondary">
                      <small>Since {startDateStr}</small>
                    </p>
                  </dd>
                </dl>
              </div>
              <div className="col-4">
                <dl>
                  <dt>Total Distance:</dt>
                  <dd>
                    <p className="mb-0">
                      {helpers.calculateTotalDistance(runs)} miles
                    </p>
                    <p className="mb-0 text-secondary">
                      <small>Since {startDateStr}</small>
                    </p>
                  </dd>
                </dl>
              </div>
              <div className="col-4">
                <dl>
                  <dt>Total Time:</dt>
                  <dd>
                    <p 
                      className="mb-0"
                    >
                      {helpers.secondsToLongTimeString(totalTime)}
                    </p>
                    <p 
                      className="mb-0 text-secondary"
                    >
                      <small>Since {startDateStr}</small>
                    </p>
                  </dd>
                </dl>
              </div>
              <div className="col-4">
                <dl>
                  <dt>Longest Run:</dt>
                  <dd>
                    <p className="mb-0">
                      {longestRun && longestRun.distance} miles
                    </p>
                    <p className="mb-0 text-secondary">
                      <small>
                        {longestRunDateStr || ""}
                      </small>
                    </p>
                  </dd>
                </dl>
              </div>
              <div className="col-4">
                <dl>
                  <dt>Average Pace:</dt>
                  <dd>
                    <p className="mb-0">
                      {`${helpers.secondsToTimeString(avgPace)} min/mile`}
                    </p>
                    <p className="mb-0 text-secondary">
                      <small>Since {startDateStr}</small>
                    </p>
                  </dd>
                </dl>
              </div>
              <div className="col-4">
                <dl>
                  <dt>Record Pace:</dt>
                  <dd>
                    <p className="mb-0">
                      {recordPaceStr || ""} min/mile
                    </p>
                    <p className="mb-0 text-secondary">
                      <small>{recordPaceDateStr || ""}</small>
                    </p>
                  </dd>
                </dl>
              </div>
            </div>
          : <div>
              <p>No runs yet...</p>
            </div>
        }
    </div>
  );
};

export default connect(mapStateToProps)(Vitals);
