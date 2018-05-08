import React from "react";
import PropTypes from "prop-types";
import { getDateInfo, secondsToTimeString  } from "../helpers";

const RunItem = ({ data }) => {
  const { date, distance, seconds, notes } = data;
  
  return (
    <li className="list-group-item">
      <div className="row">
        <span className="col-3">{getDateInfo(date).dateString}</span>
        <span className="col-3">{getDateInfo(date).dayString}</span>
        <span className="col-3">{distance} miles</span>
        <span className="col-3">{secondsToTimeString(seconds)}</span>
      </div>
      <div className="pt-2">
        <span className="text-secondary">{notes}</span>
      </div>
    </li>
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
