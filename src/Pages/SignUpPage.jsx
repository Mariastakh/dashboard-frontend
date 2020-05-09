import React, { Component } from "react";

export default class SignUpPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      confirmedPassword: "",
      email: "",
    };
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
    //alert(`${this.state.username} ${this.state.password}`);
    if (this.state.confirmedPassword !== this.state.password) {
      alert("Passwords don't match");
    } else {
      this.props.history.push("/dashboard");
    }
  };

  render() {
    const { username, password, confirmedPassword, email } = this.state;
    return (
      <>
        <p>Hackathon</p>
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
              type="text"
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
