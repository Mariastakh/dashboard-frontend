import React, { Component } from "react";
import styles from "./Preview.module.css";
import container from "../assets/Container.png";

export default class SportsPreview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className={styles.preview} data-testid="sportspreview">
          <p className={styles.title}>Sport</p>
          <br></br>
          {this.props.team}
        </div>
      </>
    );
  }
}
