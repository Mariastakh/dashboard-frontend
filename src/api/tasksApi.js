import axios from "axios";
import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/tasks/";

export function getTasks() {
  return axios.get(baseUrl).then(handleResponse).catch(handleError);
}

export function saveTask(task) {
  return axios
    .put(
      baseUrl + (task.id || ""),
      { task: task },
      { headers: { "content-type": "application/json" } }
    )
    .then(handleResponse)
    .catch(handleError);
}

async function handleCreatedResponse(response) {
  // console.log(response);
  if (response.status === 201) return response;
  if (response.status === 400) {
    //console.log(response);
    // A server-side validation error occurred.
    // Server side validation returns a string error message, so parse as text instead of json.
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("Network response was not ok.");
}
