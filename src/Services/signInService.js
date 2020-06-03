import React, { Component } from "react";
import axios from "axios";
import addPicture from "../assets/Add_picture.png";

export default class SignInService extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      confirmedPassword: "",
      email: "",
      image: "",
      registrationError: "",
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePasswordConfirmationChange = this.handlePasswordConfirmationChange.bind(
      this
    );
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handlePasswordConfirmationChange = (event) => {
    this.setState({ confirmedPassword: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handleImageChange = (event) => {
    console.log(event.target.files[0]);
    this.setState({ image: event.target.files[0] });
    console.log(this.state.image);
  };

  //"https://em7jsvk2ig.execute-api.eu-west-2.amazonaws.com/production/register"

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.confirmedPassword !== this.state.password) {
      alert("Passwords don't match");
    } else {
      const file = this.state.image;
      // Split the filename to get the name and type
      let fileParts = file.name.split(".");
      let fileName = fileParts[0];
      let fileType = fileParts[1];
      console.log("Preparing the upload");

      axios
        .post(
          "https://em7jsvk2ig.execute-api.eu-west-2.amazonaws.com/production/register",
          {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            fileName: fileName,
            fileType: fileType,
          },
          { withCredentials: true }
        )
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            // image
            const returnData = response.data.data.returnData;
            const signedRequest = returnData.signedRequest;
            const url = returnData.url;
            console.log("RETURN DAATA", returnData);
            console.log("Recieved a signed request " + signedRequest);

            // Put the fileType in the headers for the upload
            var options = {
              headers: {
                "Content-Type": fileType,
              },
            };
            axios
              .put(signedRequest, file, options)
              .then((result) => {
                console.log("Response from s3", result);
              })
              .catch((error) => {
                alert("ERROR " + JSON.stringify(error));
              });

            this.props.handleSuccessfulAuth(response);
          } else {
            this.setState({ registrationError: "Oops, sign-up didn't work" });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  render() {
    const { username, password, confirmedPassword, email, image } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div data-testid="username">
            <label>Username</label>
            <input
              data-testid="usernameinput"
              name="username"
              type="text"
              value={username}
              onChange={this.handleUsernameChange}
              required
            />
          </div>

          <div data-testid="password">
            <label>Password</label>
            <input
              data-testid="passwordinput"
              name="password"
              type="password"
              value={password}
              onChange={this.handlePasswordChange}
              required
            />
          </div>

          <div data-testid="passwordconfirmation">
            <label>Confirm Password</label>
            <input
              data-testid="passwordconfirmationinput"
              name="passwordconfirmation"
              type="password"
              value={confirmedPassword}
              onChange={this.handlePasswordConfirmationChange}
              required
            />
          </div>

          <div data-testid="email">
            <label>Email</label>
            <input
              data-testid="emailinput"
              name="email"
              type="email"
              value={email}
              onChange={this.handleEmailChange}
              required
            />
          </div>

          <div data-testid="image">
            <label for="file-input">
              <img src={addPicture} alt="image holder" />;
            </label>
            <input
              data-testid="imageinput"
              id="file-input"
              name="image"
              type="file"
              onChange={this.handleImageChange}
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
}
