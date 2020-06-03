import React, { useState } from "react";
import RegistrationForm from "../Components/RegistrationForm";
import { createUser } from "../api/createUser";

function RegistrationPage(props) {
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({
    username: "",
    password: "",
    passowrdConfirmation: "",
  });

  function handleChange({ target }) {
    setUser({
      ...user,
      [target.name]: target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formIsValid()) return;
    createUser(user.username, user.password).then((response) => {
      props.history.push("/login");
    });
  }

  function formIsValid() {
    const _errors = {};
    if (!user.username) _errors.username = "Username is required";
    if (!user.password) _errors.password = "Password is required";
    if (!user.passowrdConfirmation)
      _errors.passowrdConfirmation = "Please confirm your password";

    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }

  return (
    <>
      <p>Hackathon</p>

      <RegistrationForm
        errors={errors}
        user={user}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default RegistrationPage;
