import React, { Component } from "react";
import container from "../assets/Container.png";

export default class SportsPreview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div data-testid="sportspreview">
          Sports
          <a href="/sports">
            <img src={container} alt="a sports update" />
          </a>
        </div>
      </>
    );
  }
}
