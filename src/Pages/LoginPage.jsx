import React, { useState } from "react";
import LoginForm from "../Components/LoginForm";
import { getUser } from "../api/getUser";

function LoginPage(props) {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  function handleChange({ target }) {
    setUser({
      ...user,
      [target.name]: target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    getUser(user.username, user.password).then((response) => {
      setUser(user);
      localStorage.setItem("jwt", response.data.token);
      localStorage.setItem("user", user.username);
      props.history.push("/dashboard");
    });
  }

  return (
    <>
      <p>Welcome</p>
      <LoginForm user={user} onChange={handleChange} onSubmit={handleSubmit} />
      <p>
        New? <a href="/register">Sign up</a>{" "}
      </p>
    </>
  );
}

export default LoginPage;
