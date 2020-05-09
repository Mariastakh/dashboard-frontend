import React, { Component } from "react";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  handleUsernameChange = (event) => {
    console.log(event.target.value);
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    console.log(event.target.username.value);
    //alert(`${this.state.username} ${this.state.password}`);
    this.props.history.push("/dashboard");
    event.preventDefault();
  };

  render() {
    const { username, password } = this.state;
    return (
      <>
        <p>Hackathon</p>
        <p>{this.props.loggedInStatus}</p>
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

        <p>New to Hackathon? <a href="/signup">Sign up</a> </p>
      </>
    );
  }
}
