import React, { Component } from "react";
import SignInService from "../Services/signInService";

export default class SignUpPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  }

  handleSuccessfulAuth(data) {
   // this.props.handleLogin();
    this.props.history.push("/");
  }

  render() {
    return (
      <>
        <p>Hackathon</p>
        <p>{this.props.loggedInStatus}</p>
        <SignInService handleSuccessfulAuth={this.handleSuccessfulAuth} />
      </>
    );
  }
}
