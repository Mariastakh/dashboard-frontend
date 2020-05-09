import React, { Component } from "react";
import { Link } from "react-router-dom";
import container from "../../assets/Container.png";

export default class SportsPreview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div data-testid="sportspreview">
          Sports
          <Link to="/sports">
            <img src={container} alt="a sports update" />
          </Link>
        </div>
      </>
    );
  }
}
