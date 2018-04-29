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
              <svg viewBox="0 0 20 20" className="login-form-label--icon">
                <path d="M0 0 L10 10 L0 20" />
              </svg>
            </label>

            <label className="login-form-label">
              <input className="login-form--input" type="password" placeholder="Password" name="password" />
              <svg viewBox="0 0 20 20" className="login-form-label--icon">
                <path d="M0 0 L10 10 L0 20" />
              </svg>
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
