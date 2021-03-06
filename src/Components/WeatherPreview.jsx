import React, { Component } from "react";
import styles from "./Preview.module.css";
import container from "../assets/Container.png";
import clouds from "../assets/Clouds_icon.png";
import sun from "../assets/Sun_icon.png";
import rain from "../assets/Rain_icon.png";

export default class WeatherPreview extends Component {
  constructor(props) {
    super(props);
  }

  Icon(options) {
    const cloudyConditions = ["clouds"];
    const clearConditions = ["clear"];
    const wetConditions = ["rain", "drizzle", "sleet", "thunderstorm", "snow"];
    const description = options.description;

    // run the tests agains every element in the array

    if (cloudyConditions.some((el) => description.includes(el))) {
      return <img src={clouds} alt="weather icon" />;
    } else if (clearConditions.some((el) => description.includes(el))) {
      return <img src={sun} alt="weather icon" />;
    } else if (wetConditions.some((el) => description.includes(el))) {
      return <img src={rain} alt="weather icon" />;
    } else {
      return <img src={clouds} alt="the current weather" />;
    }
  }

  render() {
    return (
      <>
        <div className={styles.preview} data-testid="weatherpreview">
          <p className={styles.title}>Weather</p>
          <div className={styles.previewContent}>
            
            <this.Icon  description={this.props.description} />
            {this.props.temperature} degrees
            <br></br>
            <p className={styles.location}>{this.props.location}</p>
            <br></br>
          </div>
        </div>
      </>
    );
  }
}
