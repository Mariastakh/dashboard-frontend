import React, { useState, useEffect } from "react";
import TextInput from "../Components/common/TextInput";
import { getTeams } from "../api/footballApi";

function SporstPage() {
  const [team, setTeam] = useState("");
  const [teams, setTeams] = useState([]);
  const [errors, setErrors] = useState({});

  function handleChange({ target }) {
    setTeam(target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formIsValid()) return;
    getTeams(team).then((response) => {
      setTeams(response.teams);
      localStorage.setItem("teamdata", team);
    });
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

  function formIsValid() {
    const _errors = {};
    if (!team) _errors.team = "Team name is required";

    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }

  return (
    <>
      sports page
      <form onSubmit={handleSubmit}>
        <TextInput
          data-testid="team"
          id="team"
          label="team"
          name="team"
          onChange={handleChange}
          value={team}
          error={errors.team}
        />
      </form>
      <Teams losingTeams={teams} />
    </>
  );
}

export default SporstPage;
