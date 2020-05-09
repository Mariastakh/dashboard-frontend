import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { username: "", password: "" };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange = (event) => {
    console.log(event.target.value);
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.username.value);
    axios
      .post(
        "http://localhost:8000/",
        {
          username: this.state.username,
          password: this.state.password,
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data === "OK") {
          this.props.handleSuccessfulAuth(response);
        } else {
          this.setState({ registrationError: "Oops, log-in unsuccessful" });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { username, password } = this.state;
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
