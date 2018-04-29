import React, { Component } from 'react';

import './LoginForm.css';

class LoginForm extends Component {
  render() {
    return (
      <div className="login-form">
        <div className="login-form-container">
          <h2>Sign In</h2>
          <form className="login-form-body">
            <label className="login-form-label">
              <input className="login-form--input" type="text" placeholder="Username" name="username" />
            </label>

            <label className="login-form-label">
              <input className="login-form--input" type="password" placeholder="Password" name="password" />
            </label>

            <button className="login-form--btn" type="submit">
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
