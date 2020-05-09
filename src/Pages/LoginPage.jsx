import React, { Component } from "react";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <p>Hackathon</p>
        <form>
          <div data-testid="username">
            <label for="name">Username</label>
            <input id="name" name="username" type="text" required />
          </div>

          <div data-testid="password">
            <label for="pwd">Password</label>
            <input id="pwd" name="password" type="text" required />
          </div>
          <input
            type="button"
            className="button"
            value="Submit"
            data-testid="submit"
          />
        </form>

        <p>New to Hackathon? Sign Up</p>
      </>
    );
  }
}
