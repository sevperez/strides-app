import React, { Component } from "react";

class NewRunForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      distance: "",
      minutes: "",
      seconds: "",
      notes: "",
    };
    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.triggerNewRun = this.triggerNewRun.bind(this);
  }
  
  handleInputChange(e) {
    const target = e.target;
    const val = target.value;
    const name = target.name;
    
    this.setState({
      [name]: val,
    });
  }
  
  triggerNewRun(e) {
    e.preventDefault();

    const {date, distance, minutes, seconds, notes} = this.state;
    
    const runData = {
      date,
      notes,
      distance: Number(distance),
      seconds: Number(seconds) + Number(minutes) * 60,
    };
    
    this.setState({
      date: "",
      distance: "",
      minutes: "",
      seconds: "",
      notes: ""
    });
    
    this.props.handleNewRun(runData);
  }
  
  render() {
    return (
      <div className="row border border-top-0 border-right-0 border-left-0 p-3 pb-4 mb-3">
        <h3>New Run</h3>
        <form className="col-12" id="newRun" onSubmit={this.triggerNewRun}>
          <div className="form-row">
            <div className="form-group col-4">
              <label htmlFor="date">Date</label>
              <input onChange={this.handleInputChange} type="date" className="form-control" id="date" name="date" value={this.state.date} />
            </div>
            <div className="form-group col-4">
              <label htmlFor="distance">Distance <small>(miles)</small></label>
              <input onChange={this.handleInputChange} type="text" className="form-control" id="distance" name="distance" placeholder="miles" value={this.state.distance} />
            </div>
            <div className="form-group col-4">
              <label htmlFor="minutes" className="d-block">Time</label>
              <input onChange={this.handleInputChange} type="number" className="form-control d-inline-block w-47-6" id="minutes" name="minutes" placeholder="minutes" min="0" value={this.state.minutes} /> :  
              <input onChange={this.handleInputChange} type="number" className="form-control d-inline-block w-47-6" id="seconds" name="seconds" placeholder="seconds" min="0" value={this.state.seconds} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-12">
              <label htmlFor="notes">Notes</label>
              <textarea onChange={this.handleInputChange} className="form-control" id="notes" name="notes" rows="3"value={this.state.notes}></textarea>
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