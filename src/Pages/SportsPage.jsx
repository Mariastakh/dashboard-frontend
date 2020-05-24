import React, { Component } from "react";
import { getTeams } from "../api/footballApi";

export default class SporstPage extends Component {
  constructor(props) {
    super(props);
    this.state = { team: "", losingTeams: [] };
  }

  handleTeamChange = (event) => {
    this.setState({ team: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleTeam(this.state.team);

    getTeams(this.state.team).then((response) => {
      this.setState({ losingTeams: response.teams });
    });
  };

  Teams(options) {
    if (options.losingTeams.length === 0) {
      return <></>;
    } else {
      const teamList = options.losingTeams.map((team) => (
        <li key={team}>{team}</li>
      ));
      return <ul>{teamList}</ul>;
    }
  }

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
        <this.Teams losingTeams={this.state.losingTeams} />
      </>
    );
  }
}
