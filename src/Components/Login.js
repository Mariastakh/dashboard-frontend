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
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  //"https://em7jsvk2ig.execute-api.eu-west-2.amazonaws.com/production/"

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://em7jsvk2ig.execute-api.eu-west-2.amazonaws.com/production/",
        {
          username: this.state.username,
          password: this.state.password,
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
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
