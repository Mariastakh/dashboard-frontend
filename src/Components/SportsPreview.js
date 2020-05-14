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
          Sport<br></br>
          {this.props.team}
          <a href="/sports">
            <img className={styles.img} src={container} alt="a sports update" />
          </a>
        </div>
      </>
    );
  }
}
