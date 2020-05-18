import React, { Component } from "react";
import styles from "./Preview.module.css";
import container from "../assets/Container.png";

export default class PhotoPreview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a style={{ textDecoration: "none", color: "black" }} href="/photos">
        <div className={styles.preview} data-testid="photopreview">
        <p className={styles.title}>Photos</p>
        </div>
      </a>
    );
  }
}
