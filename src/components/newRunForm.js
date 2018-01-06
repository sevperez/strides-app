import React, { Component } from "react";

class NewRunForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  
  render() {
    return (
      <div className="row border border-top-0 border-right-0 border-left-0 p-3 pb-4 mb-3">
        <h3>New Run</h3>
        <a href="#newRun" data-toggle="collapse" role="button" className="pt-1 pl-3 text-info"><small>toggle</small></a>
        <form className="col-12 collapse" id="newRun">
          <div className="form-row">
            <div className="form-group col-4">
              <label htmlFor="date">Date</label>
              <input type="date" className="form-control" id="date" />
            </div>
            <div className="form-group col-4">
              <label htmlFor="distance">Distance <small>(miles)</small></label>
              <input type="number" className="form-control" id="distance" placeholder="miles" min="0" />
            </div>
            <div className="form-group col-4">
              <label htmlFor="minutes" className="d-block">Time</label>
              <input type="number" className="form-control d-inline-block w-47-6" id="minutes" placeholder="minutes" min="0" /> :  
              <input type="number" className="form-control d-inline-block w-47-6" id="seconds" placeholder="seconds" min="0" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-12">
              <label htmlFor="notes">Notes</label>
              <textarea className="form-control" id="notes" rows="3"></textarea>
            </div>
          </div>
          <button type="submit" className="btn btn-primary mr-2">Submit</button>
          <button type="reset" className="btn btn-info">Reset</button>
        </form>
      </div>
    );
  }
}

export default NewRunForm;