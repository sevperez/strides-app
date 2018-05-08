import React from "react";
import { connect } from "react-redux";
import RunItem from "./RunItem";

const mapStateToProps = (state) => {
  return {
    runs: state.runs,
  };
};

export const RunList = ({ runs }) => {
  const runIds = runs ? Object.keys(runs) : [];
  
  return (
    <ul className="list-group">
      {runIds.map(id => (
        <RunItem key={id} data={runs[id]} />
      ))}
    </ul>
  );
};

export default connect(mapStateToProps)(RunList);
