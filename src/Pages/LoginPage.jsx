import React, { useState } from "react";
import Login from "../Components/Login";
import getUser from "../api/getUser";

function LoginPage(props) {
  const [user, setUser] = useState([]);

  function handleChange(event) {}

  function handleSubmit(event) {
    event.preventDefault();
    getUser(user.username, user.password).then((response) => {
      console.log("response is: ", response);
      localStorage.setItem("jwt", response.data.token);
      localStorage.setItem("user", data.user.username);
      props.history.push("/dashboard");
    });
  }

  return (
    <>
      <p>Hackathon</p>

      <Login user={user} onChange={handleChange} onSubmit={handleSubmit} />

      <p>
        New? <a href="/signup">Sign up</a>{" "}
      </p>
    </>
  );
}

export default LoginPage;
