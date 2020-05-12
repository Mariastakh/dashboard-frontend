import React, { Component } from "react";
import styles from "./Preview.module.css";
import container from "../assets/Container.png";

export default class WeatherPreview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className={styles.preview} data-testid="weatherpreview">
          {/* Cloudy */}
          <img
            className={styles.img}
            src={container}
            alt="the current weather"
          />
        </div>
      </>
    );
  }
}
