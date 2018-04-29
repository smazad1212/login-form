import React, { Component } from 'react';

import './LoginForm.css';

class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
    this.handleField = this.handleField.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleField(event) {
    let fieldName = event.target.name
    let fieldContent = event.target.value
    this.setState({
      [fieldName]: fieldContent
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    // let minLength = event.target.minlength

    console.table([['username', 'password'], [this.state.username, this.state.password]])
  }

  render() {
    return (
      <div className="login-form">
        <div className="login-form-container">
          <h2>Sign In</h2>
          <form className="login-form-body" onSubmit={this.handleSubmit}>
            <label className="login-form-label">
              <input
                className="login-form--input"
                type="text"
                placeholder="Username"
                name="username"
                required
                minLength="4"
                onChange={this.handleField}
              />
              <svg viewBox="0 0 20 20" className="login-form-label--icon">
                <path d="M0 0 L10 10 L0 20" />
              </svg>
              <svg viewBox="0 0 40 2" className="login-form--border" preserveAspectRatio="none">
                <path d="M0 1 L40 1" />
                <path d="M0 1 L40 1" className="login-form--border-focus" />
                <path d="M0 1 L40 1" className="login-form--border-valid" />
                <path d="M0 1 L40 1" className="login-form--border-invalid" />
              </svg>
            </label>

            <label className="login-form-label">
              <input
                className="login-form--input"
                type="password"
                placeholder="Password"
                name="password"
                required
                minLength="8"
                onChange={this.handleField}
              />
              <svg viewBox="0 0 20 20" className="login-form-label--icon">
                <path d="M0 0 L10 10 L0 20" />
              </svg>
              <svg viewBox="0 0 40 2" className="login-form--border" preserveAspectRatio="none">
                <path d="M0 1 L40 1" />
                <path d="M0 1 L40 1" className="login-form--border-focus" />
                <path d="M0 1 L40 1" className="login-form--border-valid" />
                <path d="M0 1 L40 1" className="login-form--border-invalid" />
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
