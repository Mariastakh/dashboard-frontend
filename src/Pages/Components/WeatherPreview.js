import React, { Component } from "react";
import container from "../../assets/Container.png";

export default class WeatherPreview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div data-testid="weatherpreview">
          Cloudy
          <img src={container} alt="the current weather" />
        </div>
      </>
    );
  }
}
