import React, { useState, useEffect } from "react";
import TextInput from "../Components/common/TextInput";
import { getTeams } from "../api/footballApi";

function SporstPage() {
  const [team, setTeam] = useState("");
  const [teams, setTeams] = useState([]);

  function handleChange({ target }) {
    setTeam(target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    getTeams(team).then((response) => {
      setTeams(response.teams);
    });

    localStorage.setItem("teamdata", team);
  }

  function Teams(options) {
    if (options.losingTeams.length === 0) {
      return <></>;
    } else {
      const teamList = options.losingTeams.map((team) => (
        <li key={team}>{team}</li>
      ));
      return <ul>{teamList}</ul>;
    }
  }

  return (
    <>
      sports page
      <form onSubmit={handleSubmit}>
        <div data-testid="team">
          <label>Team</label>
          <input
            data-testid="teaminput"
            name="team"
            type="text"
            value={team}
            onChange={handleChange}
            required
          />
        </div>
      </form>
      <Teams losingTeams={teams} />
    </>
  );
}

export default SporstPage;
