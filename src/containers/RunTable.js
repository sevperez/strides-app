import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import RunItem from "../components/RunItem";
import SortLink from "./SortLink";
import LoadingIndicator from "../components/LoadingIndicator";
import FetchError from "../components/FetchError";
import { getSortedRunIds, getIsFetching, getErrorMessage } from "../reducers";
import * as actions from "../actions";

const mapStateToProps = (state) => ({
  runs: state.runList.runs,
  sort: state.sort,
  reverse: state.reverse,
  sortedRunIds: getSortedRunIds(state.runList, state.sort),
  isFetching: getIsFetching(state.runList),
  errorMessage: getErrorMessage(state.runList),
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
    const { runs, reverse, isFetching, errorMessage } = this.props;
    let { sortedRunIds } = this.props;
    if (reverse) {
      sortedRunIds = sortedRunIds.reverse();
    }
    
    if (isFetching && !sortedRunIds.length) {
      return <LoadingIndicator />;
    }
    
    if (errorMessage && !sortedRunIds.length) {
      console.log("%c errorMessage: ", "color: red", errorMessage);
      return (
        <FetchError
          message={errorMessage}
          onRetry={() => this.fetchData()}
        />
      );
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
  isFetching: PropTypes.bool,
  sortedRunIds: PropTypes.arrayOf(PropTypes.string),
};
