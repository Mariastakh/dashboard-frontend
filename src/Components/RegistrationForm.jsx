import React from "react";

function RegistrationForm(props) {
  return (
    <>
      <form onSubmit={props.onSubmit}>
        <div data-testid="username">
          <label>Username</label>
          <input
            data-testid="usernameinput"
            name="username"
            type="text"
            value={props.user.username}
            onChange={props.onChange}
            required
          />
        </div>

        <div data-testid="password">
          <label>Password</label>
          <input
            data-testid="passwordinput"
            name="password"
            type="password"
            value={props.user.password}
            onChange={props.onChange}
            required
          />
        </div>

        <div data-testid="passwordConfimration">
          <label>Confirm password</label>
          <input
            data-testid="passwordConfirmationInput"
            name="passwordConfirmation"
            type="password"
            value={props.user.passwordConfirmation}
            onChange={props.onChange}
            required
          />
        </div>

        <div data-testid="submit">
          <button type="submit" className="button">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default RegistrationForm;
