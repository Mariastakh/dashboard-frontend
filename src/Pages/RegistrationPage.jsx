import React, { useState } from "react";
import RegistrationForm from "../Components/RegistrationForm";
import { createUser } from "../api/createUser";

function RegistrationPage(props) {
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
    createUser(user.username, user.password).then((response) => {
      props.history.push("/login");
    });
  }

  return (
    <>
      <p>Hackathon</p>

      <RegistrationForm
        user={user}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default RegistrationPage;
