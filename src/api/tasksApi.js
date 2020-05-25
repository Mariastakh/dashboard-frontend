import axios from "axios";
import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/tasks/";

export function getTasks() {
  return axios.get(baseUrl).then(handleResponse).catch(handleError);
}
