import React, { Component } from "react";
import { getUser } from "../api/getUser";

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
  // "http://localhost:8000/"

  handleSubmit = (event) => {
    event.preventDefault();
    getUser(this.state.username, this.state.password).then((response) => {
      console.log("response is: ", response);
      localStorage.setItem("jwt", response.data.token);
      this.props.handleSuccessfulAuth(response.data);
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
