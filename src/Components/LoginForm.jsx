import React from "react";
import PropTypes from "prop-types";
import TextInput from "./common/TextInput";

function LoginForm(props) {
  return (
    <>
      <form onSubmit={props.onSubmit}>
        <TextInput
          data-testid="usernameinput"
          id="username"
          label="Username"
          name="username"
          type="text"
          onChange={props.onChange}
          value={props.user.username}
          error={props.errors.username}
        />

        <TextInput
          data-testid="passwordinput"
          id="password"
          label="Password"
          name="password"
          type="password"
          onChange={props.onChange}
          value={props.user.password}
          error={props.errors.password}
        />

        <div data-testid="submit">
          <button type="submit" className="button">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

LoginForm.propTypes = {
  user: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default LoginForm;
