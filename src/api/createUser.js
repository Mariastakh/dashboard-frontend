import axios from "axios";
const baseUrl = process.env.REACT_APP_API_URL + "/register/";

export function createUser(_username, _password) {
  // return axios.get(baseUrl).then(handleResponse).catch(handleError);

  return axios
    .post(
      baseUrl,
      {
        username: _username,
        password: _password,
      },
      { withCredentials: true }
    )
    .then(handleResponse)
    .catch(handleError);
}

async function handleResponse(response) {
  console.log(response);
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

// In a real app, would likely call an error logging service.
function handleError(error) {
  // eslint-disable-next-line no-console
  console.error("API call failed. " + error);
  throw error;
}
