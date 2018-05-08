import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import RunItem from "../components/RunItem";

const mapStateToProps = (state) => ({
  runs: state.runs,
});

export const RunTable = ({ runs }) => {
  const runIds = runs ? Object.keys(runs) : [];
  
  return (
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
        {runIds.map(id => (
          <RunItem key={id} data={runs[id]} />
        ))}
      </tbody>
    </table>
  );
};

export default connect(mapStateToProps)(RunTable);

RunTable.propTypes = {
  runs: PropTypes.objectOf(
    PropTypes.shape({
      date: PropTypes.date,
      distance: PropTypes.number,
      seconds: PropTypes.number,
      notes: PropTypes.string,
    })
  ),
};
