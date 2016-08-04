import React, { Component } from 'react';

class LoginForm extends Component {
  render() {
    return (
      <form className="login-form">
        <div className="login-form-input-group">
          <input type="text" className="form-control input-wb-default" placeholder="username"></input>
          <i className="fa fa-user"></i>
        </div>
        <div className="login-form-input-group">
          <input type="password" className="form-control input-wb-default" placeholder="password"></input>
          <i className="fa fa-keyboard-o"></i>
        </div>
        <div className="login-form-input-group">
          <button className="btn btn-wb-default btn-block">Login</button>
        </div>
      </form>
    )
  }
}

export default LoginForm;
