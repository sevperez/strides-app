import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import RunItem from "../components/RunItem";
import Modal from "../components/Modal";
import NewRunForm from "./NewRunForm";
import RunInfoModal from "../components/RunInfoModal";
import SortLink from "./SortLink";
import FetchError from "../components/FetchError";
import { getSortedRunIds, getErrorMessage } from "../reducers";
import * as actions from "../actions";

const mapStateToProps = (state) => ({
  user: state.userInfo.user,
  runs: state.runList.runs,
  sort: state.sort,
  reverse: state.reverse,
  sortedRunIds: getSortedRunIds(state.runList, state.sort),
  errorMessage: getErrorMessage(state.runList),
});

export class RunTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNewRunModal: false,
      showRunInfo: null,
    };
    
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleAddClose = this.handleAddClose.bind(this);
    this.handleRunClick = this.handleRunClick.bind(this);
    this.handleRunClose = this.handleRunClose.bind(this);
  }
  
  handleAddClick() {
    this.setState({ showNewRunModal: true });
  }
  
  handleAddClose() {
    this.setState({ showNewRunModal: false });
  }
  
  handleRunClick(id) {
    this.setState({ showRunInfo: id });
  }
  
  handleRunClose() {
    this.setState({ showRunInfo: null });
  }
  
  render() {
    const { runs, reverse, errorMessage } = this.props;
    let { sortedRunIds } = this.props;
    if (reverse) {
      sortedRunIds = sortedRunIds.reverse();
    }
    
    const hasRuns = !!sortedRunIds.length;
    
    if (!hasRuns) {
      return (
        <div className="p-3 top-border">
          <h3 className="mb-3">
            <img 
              className="pr-1 xs-logo"
              src="/images/shoe_logo_small.png"
              alt="strides logo"
            />
            <span className="align-middle">My Runs</span>
          </h3>
          <p>No runs yet...</p>
        </div>
      );
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
      <div className="p-3 top-border clearfix">
        { this.state.showNewRunModal &&
          <Modal
            titleElements={
              <h3 className="my-0">
                <i 
                  className="fa fa-plus-circle mr-3 dark-red"
                  aria-hidden="true">
                </i>
                New Run
              </h3>
            }
            handleClose={this.handleAddClose}
          >
            <NewRunForm handleClose={this.handleAddClose} />
          </Modal>
        }
        { this.state.showRunInfo &&
          <RunInfoModal
            data={runs[this.state.showRunInfo]}
            handleClose={this.handleRunClose}
          />
        }
        <button
          type="button"
          id="addRunBtn"
          className="btn float-right p-0 transparentBtn"
          onClick={this.handleAddClick}
        >
          <p className="lead m-0 p-0">
            <i
              className="fa fa-plus-circle mr-2 spinHover"
              aria-hidden="true"
            >
            </i>
            Add Run
          </p>
        </button>
        <h3 className="mb-3">
          <img 
            className="xs-logo"
            src="/images/shoe_logo_small.png"
            alt="strides logo"
          />
          <span className="align-middle">My Runs</span>
        </h3>
        <table className="table table-hover table-sm run-table">
          <thead>
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
              <RunItem
                key={id}
                data={runs[id]}
                handleRunClick={this.handleRunClick.bind(this, id)}
              />
            ))}
          </tbody>
        </table>
      </div>
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
