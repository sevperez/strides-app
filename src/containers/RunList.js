import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import RunItem from "../components/RunItem";

const mapStateToProps = (state) => ({
  runs: state.runs,
});

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

RunList.propTypes = {
  runs: PropTypes.objectOf(
    PropTypes.shape({
      date: PropTypes.date,
      distance: PropTypes.number,
      seconds: PropTypes.number,
      notes: PropTypes.string,
    })
  ),
};
