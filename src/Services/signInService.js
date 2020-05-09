import axios from "axios";
export function signInService(username, password, email) {
  axios.post(
    "http://localhost:8000/signup",
    {
      username: username,
      password: password,
      email: email,
    },
    { withCredentials: true }
  );
}
