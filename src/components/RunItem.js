import React from "react";
import PropTypes from "prop-types";
import { getDateInfo, secondsToTimeString  } from "../helpers";

const RunItem = ({ data }) => {
  const { date, distance, seconds, notes } = data;
  const paceSeconds = seconds / distance;
  
  return (
    <tr>
      <td>{getDateInfo(date).dateString}</td>
      <td>{getDateInfo(date).dayString}</td>
      <td>{secondsToTimeString(seconds)}</td>
      <td>{distance.toFixed(2)}</td>
      <td>{secondsToTimeString(paceSeconds)}</td>
      <td>
        { notes
          ? <i className="fa fa-info-circle dark-red" aria-hidden="true"></i>
          : <span></span>
        }
      </td>
    </tr>
  );
};

export default RunItem;

RunItem.propTypes = {
  data: PropTypes.shape({
    date: PropTypes.date,
    distance: PropTypes.number,
    seconds: PropTypes.number,
    notes: PropTypes.string,
  }).isRequired,
};
