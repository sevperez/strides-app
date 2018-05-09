import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import RunItem from "../components/RunItem";
import SortLink from "./SortLink";
import { getSortedRunIds } from "../reducers/runs";

const mapStateToProps = (state) => ({
  runs: state.runs,
  sort: state.sort,
  reverse: state.reverse,
  sortedRunIds: getSortedRunIds(state.runs, state.sort),
});

export const RunTable = ({ runs, sort, sortedRunIds, reverse }) => {
  if (reverse) {
    sortedRunIds = sortedRunIds.reverse();
  }
  
  return (
    <table className="table table-hover table-sm">
      <thead className="thead-light">
        <tr>
          <th scope="col">
            <SortLink
              attribute={"date"}
            >
              <span>Date</span>
            </SortLink>
          </th>
          <th scope="col">
            <SortLink
              attribute={"day"}
            >
              <span>Day</span>
            </SortLink>
          </th>
          <th scope="col">
            <SortLink
              attribute={"time"}
            >
              <span>Time</span>
            </SortLink>
          </th>
          <th scope="col">
            <SortLink
              attribute={"distance"}
            >
              <span>Distance</span>
              <small className="text-secondary pl-1">(miles)</small>
            </SortLink>
          </th>
          <th scope="col">
            <SortLink
              attribute={"pace"}
            >
              <span>Pace</span>
              <small className="text-secondary pl-1">(min/mile)</small>
            </SortLink>
          </th>
          <th scope="col">
            <SortLink
              attribute={"notes"}
            >
              <span>Notes</span>
            </SortLink>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedRunIds.map(id => (
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
  sortedRunIds: PropTypes.arrayOf(PropTypes.string),
};
