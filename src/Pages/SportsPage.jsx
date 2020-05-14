import React, { Component } from "react";

export default class SporstPage extends Component {
  constructor(props) {
    super(props);
    this.state = { team: "" };
  }

  handleTeamChange = (event) => {
    this.setState({ team: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleTeam(this.state.team);
  };

  render() {
    const { team } = this.state;
    return (
      <>
        sports page
        <form onSubmit={this.handleSubmit}>
          <div data-testid="team">
            <label>Team</label>
            <input
              data-testid="teaminput"
              name="team"
              type="text"
              value={team}
              onChange={this.handleTeamChange}
              required
            />
          </div>
        </form>
      </>
    );
  }
}
