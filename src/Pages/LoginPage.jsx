import React, { useState, useEffect } from "react";
import LoginForm from "../Components/LoginForm";
import { getUser } from "../api/getUser";

function LoginPage(props) {
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  // useEffect(() => {
  //   if (user) {
  //     props.history.push("/dashboard");
  //   }
  // });

  function handleChange({ target }) {
    setUser({
      ...user,
      [target.name]: target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formIsValid()) return;
    getUser(user.username, user.password).then((response) => {
      setUser(user);
      localStorage.setItem("jwt", response.data.token);
      localStorage.setItem("user", user.username);
      props.history.push("/dashboard");
    });
  }

  function formIsValid() {
    const _errors = {};
    if (!user.username) _errors.username = "Username is required";
    if (!user.password) _errors.password = "Password is required";

    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }

  return (
    <>
      <p>Welcome</p>
      <LoginForm
        errors={errors}
        user={user}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <p>
        New? <a href="/register">Sign up</a>{" "}
      </p>
    </>
  );
}

export default LoginPage;
