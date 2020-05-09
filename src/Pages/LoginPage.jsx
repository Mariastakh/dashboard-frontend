import React, { Component } from "react";
import Login from "../Components/Login";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  }

  handleSuccessfulAuth(data) {
    this.props.history.push("/dashboard");
  }

  render() {
    const { username, password } = this.state;
    return (
      <>
        <p>Hackathon</p>
        <p>{this.props.loggedInStatus}</p>
        <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />

        <p>
          New to Hackathon? <a href="/signup">Sign up</a>{" "}
        </p>
      </>
    );
  }
}
