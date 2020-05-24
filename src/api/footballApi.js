import axios from "axios";
import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/teams/";

export function getTeams(team) {
  return axios
    .get(baseUrl, {
      params: {
        team: team,
      },
    })
    .then(handleResponse)
    .catch(handleError);
}
