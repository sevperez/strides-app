import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import RunItem from "../components/RunItem";

const mapStateToProps = (state) => ({
  runs: state.runs,
  sort: state.sort,
});

export const RunTable = ({ runs, sort }) => {
  const runIds = runs ? Object.keys(runs) : [];
  
  return (
    <table className="table table-hover table-sm">
      <thead className="thead-light">
        <tr>
          <th scope="col">
            <span>Date</span>
            { sort === "DATE" &&
              <i 
                className="fa fa-sort-desc pl-1 align-top"
                aria-hidden="true">
              </i>
            }
          </th>
          <th scope="col">
            <span>Day</span>
            { sort === "DAY" &&
              <i 
                className="fa fa-sort-desc pl-1 align-top"
                aria-hidden="true">
              </i>
            }
          </th>
          <th scope="col">
            <span>Time</span>
            <small className="text-secondary pl-1">(min)</small>
            { sort === "TIME" &&
              <i 
                className="fa fa-sort-desc pl-1 align-top"
                aria-hidden="true">
              </i>
            }
          </th>
          <th scope="col">
            <span>Distance</span>
            <small className="text-secondary pl-1">(miles)</small>
            { sort === "DISTANCE" &&
              <i 
                className="fa fa-sort-desc pl-1 align-top"
                aria-hidden="true">
              </i>
            }
          </th>
          <th scope="col">
            <span>Pace</span>
            <small className="text-secondary pl-1">(min/mile)</small>
            { sort === "PACE" &&
              <i 
                className="fa fa-sort-desc pl-1 align-top"
                aria-hidden="true">
              </i>
            }
          </th>
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


// REFERENCE

// import { sortBy, toPairs } from "lodash";

// const compareByStatus = (pairA, pairB) => {
//   if (pairA[1]["completed"] === pairB[1]["completed"]) {
//     if (pairA[1]["title"] > pairB[1]["title"]) {
//       return 1;
//     } else {
//       return -1;
//     }
//   } else if (pairA[1]["completed"] && !pairB[1]["completed"]) {
//     return 1;
//   } else if (pairB[1]["completed"] && !pairA[1]["completed"]) {
//     return -1;
//   } else {
//     return 0;
//   }
// };

// const SORTS = {
//   DATE: pairs => sortBy(pairs, pair => pair[1]["date"]),
//   DAY: pairs => sortBy(pairs, pair => pair[1]["day"]),
//   TIME: pairs => sortBy(pairs, pair => pair[1]["time"]),
//   DISTANCE: pairs => pairs.sort(compareByStatus),
//   PACE: pairs => pairs.sort(compareByStatus),
// };