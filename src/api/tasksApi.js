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
      { name: task.name, status: task.status },
      { headers: { "content-type": "application/json" } }
    )
    .then(handleResponse)
    .catch(handleError);
}
