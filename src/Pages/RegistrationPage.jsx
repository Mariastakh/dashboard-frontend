import React, { useState } from "react";
import RegistrationForm from "../Components/RegistrationForm";
import { createUser } from "../api/createUser";

function RegistrationPage(props) {
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({
    username: "",
    password: "",
    passwordConfirmation: "",
    email: "",
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
      props.history.push("/");
    });
  }

  function formIsValid() {
    const _errors = {};
    if (!user.username) _errors.username = "Username is required";
    if (!user.password) _errors.password = "Password is required";
    if (!user.passwordConfirmation)
      _errors.passwordConfirmation = "Please confirm your password";
    if (!user.email) _errors.email = "Email is required";

    const regEx = /^[.-\w]+@[\w\-]{3,}((.)\w{2,})+$/;
    if (!regEx.test(user.email)) _errors.email = "Invalid email";

    if (user.username.length < 2) _errors.username = "Username is too short";
    if (user.password.length < 8) _errors.password = "Password is too short";

    if (user.passwordConfirmation !== user.password) {
      _errors.password = "Passwords don't match";
      _errors.passwordConfirmation = "Passwords don't match";
    }

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
