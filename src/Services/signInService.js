import React, { Component } from "react";
import axios from "axios";
import { render } from "@testing-library/react";

export default class SignInService extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      confirmedPassword: "",
      email: "",
      registrationError: "",
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePasswordConfirmationChange = this.handlePasswordConfirmationChange.bind(
      this
    );
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange = (event) => {
    console.log(event.target.value);
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handlePasswordConfirmationChange = (event) => {
    this.setState({ confirmedPassword: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.username.value);
    if (this.state.confirmedPassword !== this.state.password) {
      alert("Passwords don't match");
    } else {
      axios
        .post(
          "http://localhost:8000/signup",
          {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
          },
          { withCredentials: true }
        )
        .then((response) => {
          console.log(response.data);
          if (response.data === "Created") {
            this.props.handleSuccessfulAuth(response);
          } else {
            this.setState({ registrationError: "Oops, sign-up didn't work" });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  render() {
    const { username, password, confirmedPassword, email } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div data-testid="username">
            <label>Username</label>
            <input
              data-testid="usernameinput"
              name="username"
              type="text"
              value={username}
              onChange={this.handleUsernameChange}
              required
            />
          </div>

          <div data-testid="password">
            <label>Password</label>
            <input
              data-testid="passwordinput"
              name="password"
              type="password"
              value={password}
              onChange={this.handlePasswordChange}
              required
            />
          </div>

          <div data-testid="passwordconfirmation">
            <label>Confirm Password</label>
            <input
              data-testid="passwordconfirmationinput"
              name="passwordconfirmation"
              type="password"
              value={confirmedPassword}
              onChange={this.handlePasswordConfirmationChange}
              required
            />
          </div>

          <div data-testid="email">
            <label>Email</label>
            <input
              data-testid="emailinput"
              name="email"
              type="email"
              value={email}
              onChange={this.handleEmailChange}
              required
            />
          </div>

          <div data-testid="submit">
            <button type="submit" className="button">
              Submit
            </button>
          </div>
        </form>
      </>
    );
  }
}
