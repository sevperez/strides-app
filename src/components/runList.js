import React from "react";
import RunItem from "./runItem.js";
import _ from "underscore";

const RunList = (props) => {
  if (!props.runs) {
    return (
      <div className="row border border-top-0 border-right-0 border-left-0 p-3 pb-4 mb-3">
        <h3>Run List</h3>
        <table className="table table-hover table-sm">
          <thead className="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Date</th>
              <th scope="col">Day</th>
              <th scope="col">Time <small className="text-secondary">(min)</small></th>
              <th scope="col">Distance <small className="text-secondary">(miles)</small></th>
              <th scope="col">Pace <small className="text-secondary">(min/mile)</small></th>
              <th scope="col"></th>
            </tr>
          </thead>
        </table>
        <div>No runs yet...</div>
      </div>
    );
  }
  
  const sortedKeys = _.sortBy(Object.keys(props.runs), key => { 
    return new Date(props.runs[key].date);
  }).reverse();
  
  const runItems = sortedKeys.map((key) => {
    return <RunItem key={key} runs={props.runs[key]} />}
  );
  
  return (
    <div className="row border border-top-0 border-right-0 border-left-0 p-3 pb-4 mb-3">
      <h3>Run List</h3>
      <table className="table table-hover table-sm">
        <thead className="thead-light">
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Day</th>
            <th scope="col">Time <small className="text-secondary">(min)</small></th>
            <th scope="col">Distance <small className="text-secondary">(miles)</small></th>
            <th scope="col">Pace <small className="text-secondary">(min/mile)</small></th>
          </tr>
        </thead>
        <tbody>
          {runItems}
        </tbody>
      </table>
    </div>
  );
};

export default RunList;
