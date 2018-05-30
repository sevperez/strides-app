import React from "react";
import PropTypes from "prop-types";
import Modal from "./Modal";
import { getDateInfo, secondsToTimeString  } from "../helpers";

const RunInfoModal = ({ data, handleClose }) => {
  const { date, distance, seconds, notes } = data;
  const paceSeconds = seconds / distance;
  
  return (
    <Modal
      titleElements={
        <h3 className="my-0">
          <img 
            className="runInfoLogo"
            src="/images/shoe_logo_small.png"
            alt="strides logo"
          />
          <span className="align-middle">
            Run Info
          </span>
        </h3>
      }
      handleClose={handleClose}
    >
      <div className="runInfo mb-2">
        <dl className="mb-0">
          <dt className="d-inline-block dark-red mr-3">
            <i className="fa fa-calendar mr-2" aria-hidden="true"></i>
            Date:
          </dt>
          <dd className="d-inline-block">
            {getDateInfo(date).dateString}
          </dd>
        </dl>
        <dl className="mb-0">
          <dt className="d-inline-block dark-red mr-3">
            <i className="fa fa-sun-o mr-2" aria-hidden="true"></i>
            Day:
          </dt>
          <dd className="d-inline-block">
            {getDateInfo(date).dayString}
          </dd>
        </dl>
        <dl className="mb-0">
          <dt className="d-inline-block dark-red mr-3">
            <i className="fa fa-arrow-circle-right mr-2" aria-hidden="true"></i>
            Distance:
          </dt>
          <dd className="d-inline-block">
            <span>{distance.toFixed(2)}</span>
            <small className="text-secondary ml-2">(miles)</small>
          </dd>
        </dl>
        <dl className="mb-0">
          <dt className="d-inline-block dark-red mr-3">
            <i className="fa fa-clock-o mr-2" aria-hidden="true"></i>
            Time:
          </dt>
          <dd className="d-inline-block">
            <span>{secondsToTimeString(seconds)}</span>
            <small className="text-secondary ml-2">(hh:mm:ss)</small>
          </dd>
        </dl>
        <dl className="mb-0">
          <dt className="d-inline-block dark-red mr-3">
            <i className="fa fa-calculator mr-2" aria-hidden="true"></i>
            Pace:
          </dt>
          <dd className="d-inline-block">
            <span>{secondsToTimeString(paceSeconds)}</span>
            <small className="text-secondary ml-2">(min/mile)</small>
          </dd>
        </dl>
      </div>
      <div className="mt-2">
        <dl className="mb-0">
          <dt className="dark-red mb-1">
            <i className="fa fa-pencil mr-2" aria-hidden="true"></i>
            Notes:
          </dt>
          <dd>
            {notes || "N/A"}
          </dd>
        </dl>
      </div>
    </Modal>
  );
};

export default RunInfoModal;

RunInfoModal.propTypes = {
  data: PropTypes.shape({
    date: PropTypes.date,
    distance: PropTypes.number,
    seconds: PropTypes.number,
    notes: PropTypes.string,
  }),
};
