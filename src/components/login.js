import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      displayLogin: true,
      email: "",
      password: "",
      confirm: "",
    };
    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.triggerSignin = this.triggerSignin.bind(this);
    this.triggerGoogleSignin = this.triggerGoogleSignin.bind(this);
    this.triggerCreateAccount = this.triggerCreateAccount.bind(this);
  }
  
  triggerSignin(e) {
    e.preventDefault();
    
    this.props.handleSignin(this.state.email, this.state.password);
  }
  
  triggerGoogleSignin(e) {
    e.preventDefault();
    
    this.props.handleGoogleSignin();
  }
  
  triggerCreateAccount(e) {
    e.preventDefault();
    
    if (this.state.password === this.state.confirm) {
      this.props.handleCreateAccount(this.state.email, this.state.password);
    } else {
      alert("Passwords do not match");
    }
  }
  
  handleInputChange(e) {
    const target = e.target;
    const val = target.value;
    const name = target.name;
    
    this.setState({
      [name]: val,
    });
  }
  
  render() {
    const loginForm = (
      <div className="container col-4 clearfix">
        <form className=" border rounded p-3 mb-1" onSubmit={this.triggerSignin}>
          <h3 className="borderpb-1 mb-3">Log In</h3>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input onChange={this.handleInputChange} type="text" className="form-control" id="email" name="email" value={this.state.email} placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input onChange={this.handleInputChange} type="password" className="form-control" id="password" name="password" value={this.state.password} placeholder="Enter password" />
          </div>
          <button type="submit" className="btn btn-primary mr-2">Log In</button>
        </form>
        <a
          href="#"
          className="float-left text-info"
          onClick={this.triggerGoogleSignin}
        >Log in with Google</a>
        <a
          href="#"
          className="float-right text-info"
          onClick={ () => this.setState({ displayLogin: false, email: "", password: "", confirm: "" }) }
        >Create Account</a>
      </div>
    );
    
    const createAcctForm = (
      <div className="container col-4">
        <form className=" border rounded p-3 mb-1" onSubmit={this.triggerCreateAccount}>
          <h3 className="borderpb-1 mb-3">Create Account</h3>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input onChange={this.handleInputChange} type="text" className="form-control" id="email" name="email" value={this.state.email} placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input onChange={this.handleInputChange} type="password" className="form-control" id="password" name="password" value={this.state.password} placeholder="Enter password" />
          </div>
          <div className="form-group">
            <label htmlFor="confirm">Confirm Password</label>
            <input onChange={this.handleInputChange} type="password" className="form-control" id="confirm" name="confirm" value={this.state.confirm} placeholder="Confirm password" />
          </div>
          <button type="submit" className="btn btn-primary mr-2">Create</button>
        </form>
        <a
          href="#"
          className="float-right text-danger"
          onClick={ () => this.setState({ displayLogin: true, email: "", password: "", confirm: "" }) }
        >Cancel</a>
      </div>
    );
    
    if (this.state.displayLogin) {
      return loginForm;
    } else {
      return createAcctForm;
    }
  }
}

export default Login;