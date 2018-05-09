import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { v4 } from "uuid";
import { addRun } from "../actions";

const mapDispatchToProps = (dispatch) => ({
  onRunSubmit(id, data) {
    dispatch(addRun(id, data));
  },
});

export class NewRunForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      distance: "",
      minutes: "",
      seconds: "",
      notes: "",
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.validateInput = this.validateInput.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }
  
  handleInputChange(e) {
    const target = e.target;
    const val = target.value;
    const name = target.name;
    const key = e.keyCode || e.charCode;
    
    if (key === 8 || key === 46 || this.validateInput(name, val)) {
      this.setState({
        [name]: val,
      });
    }
  }
  
  validateInput(name, val) {
    if (name === "distance") {
      if (/[^0-9.]/.test(val)) return false;
    }
    
    return true;
  }
  
  resetForm() {
    this.setState({
      date: "",
      distance: "",
      minutes: "",
      seconds: "",
      notes: ""
    });
  }
  
  handleSubmit(e) {
    e.preventDefault();

    const {date, distance, minutes, seconds, notes} = this.state;
    
    const runId = v4();
    const runData = {
      date: new Date(date).toJSON(),
      distance: Number(distance),
      seconds: Number(seconds) + Number(minutes) * 60,
      notes,
    };
    
    this.resetForm();
    this.props.onRunSubmit(runId, runData);
  }
  
  render() {
    return (
      <form
        className="col-12 py-2 my-3 border rounded"
        id="newRun"
        onSubmit={this.handleSubmit}
      >
          <div className="form-row">
            <div className="form-group col-4">
              <label htmlFor="date">
                <span>Date</span>
              </label>
              <input
                onChange={this.handleInputChange}
                type="date"
                className="form-control"
                id="date"
                name="date"
                value={this.state.date}
              />
            </div>
            <div className="form-group col-4">
              <label htmlFor="distance">
                <span className="mr-2">Distance</span>
                <small>(miles)</small>
              </label>
              <input
                onChange={this.handleInputChange}
                type="text"
                className="form-control"
                id="distance"
                name="distance"
                placeholder="miles"
                value={this.state.distance}
              />
            </div>
            <div className="form-group col-2">
              <label htmlFor="minutes" className="d-block">
                <span>Minutes</span>
              </label>
              <input
                onChange={this.handleInputChange}
                type="number"
                className="form-control d-inline-block"
                id="minutes"
                name="minutes"
                placeholder="min"
                min="0"
                value={this.state.minutes}
              />
            </div>
            <div className="form-group col-2">
              <label htmlFor="seconds" className="d-block">
                <span>Seconds</span>
              </label>
              <input
                onChange={this.handleInputChange}
                type="number"
                className="form-control d-inline-block"
                id="seconds"
                name="seconds"
                placeholder="sec"
                min="0"
                value={this.state.seconds}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-12">
              <label htmlFor="notes">
                <span>Notes</span>
              </label>
              <textarea
                onChange={this.handleInputChange}
                className="form-control"
                id="notes"
                name="notes"
                rows="3"
                value={this.state.notes}>
              </textarea>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-sm btn-primary mr-2"
          >
            Submit
          </button>
          <button
            type="reset"
            className="btn btn-sm btn-info"
            onClick={this.resetForm}
          >
            Reset
          </button>
        </form>
    );
  }
}

export default connect(null, mapDispatchToProps)(NewRunForm);

NewRunForm.propTypes = {
  onRunSubmit: PropTypes.func,
};
