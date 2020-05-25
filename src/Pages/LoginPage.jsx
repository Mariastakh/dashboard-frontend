import React, { useState } from "react";
import Login from "../Components/Login";

function LoginPage(props) {
  const [user, setUser] = useState([]);

  function handleSuccessfulAuth(data) {
    localStorage.setItem("user", data.user.username);
    props.history.push("/dashboard");
  }

  return (
    <>
      <p>Hackathon</p>

      <Login handleSuccessfulAuth={handleSuccessfulAuth} />

      <p>
        New? <a href="/signup">Sign up</a>{" "}
      </p>
    </>
  );
}

export default LoginPage;
