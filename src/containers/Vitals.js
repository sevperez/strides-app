import React from "react";
import LoadingIndicator from "../components/LoadingIndicator";
import { connect } from "react-redux";
import { getIsFetching } from "../reducers";
import * as helpers from "../helpers";

const mapStateToProps = (state) => ({
  runs: state.runList.runs,
  isFetching: getIsFetching(state.runList),
});

export const Vitals = ({ isFetching, runs }) => {
  let startDateStr, 
      longestRun,
      longestRunDateStr,
      totalTime,
      avgPace,
      recordPaceStr,
      recordPaceDateStr;
      
  if (!isFetching && Object.keys(runs).length) {
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
      <h3>My Vitals</h3>
      { isFetching && !Object.keys(runs).length
        ? <LoadingIndicator />
        : <div className="row">
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
                    {helpers.secondsToTimeString(totalTime)}
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
                    {recordPaceStr || ""} min / mile
                  </p>
                  <p className="mb-0 text-secondary">
                    <small>{recordPaceDateStr || ""}</small>
                  </p>
                </dd>
              </dl>
            </div>
          </div>
      }
    </div>
  );
};

export default connect(mapStateToProps)(Vitals);
