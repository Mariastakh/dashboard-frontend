import axios from "axios";
import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/teams/";

export function getTeams(team) {
  // axios.get(baseUrl).then(handleResponse).catch(handleError);

  return axios
    .get(baseUrl, {
      params: {
        team: team,
      },
    })
    .then(handleResponse)
    .catch(handleError);
}
