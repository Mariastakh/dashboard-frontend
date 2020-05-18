import React, { Component } from "react";
import styles from "./Preview.module.css";
import container from "../assets/Container.png";

export default class PhotoPreview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className={styles.preview} data-testid="photopreview">
          Photos
          {/* <a href="/photos">
            <img
              className={styles.img}
              src={container}
              alt="your photo collection"
            />
          </a> */}
        </div>
      </div>
    );
  }
}
