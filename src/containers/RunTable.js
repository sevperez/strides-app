import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import RunItem from "../components/RunItem";
import SortLink from "./SortLink";
import { getSortedRunIds } from "../reducers";
import * as actions from "../actions";

const mapStateToProps = (state) => ({
  runs: state.runs,
  sort: state.sort,
  reverse: state.reverse,
  sortedRunIds: getSortedRunIds(state, state.sort),
});

export class RunTable extends Component {
  componentDidMount() {
    this.fetchData();
  }
  
  fetchData() {
    const { fetchRuns } = this.props;
    fetchRuns("user1");
  }
  
  render() {
    const { runs, reverse, isFetching } = this.props;
    let { sortedRunIds } = this.props;

    if (reverse) {
      sortedRunIds = sortedRunIds.reverse();
    }
    
    if (isFetching && !sortedRunIds.length) {
      return <p>Loading ... </p>;
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
                <small className="text-secondary pl-1">(hh:mm:ss)</small>
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
  }
}

export default connect(mapStateToProps, actions)(RunTable);

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
