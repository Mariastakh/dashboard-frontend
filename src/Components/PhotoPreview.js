import React, { Component } from "react";
import styles from "./Preview.module.css";

export default class PhotoPreview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a style={{ textDecoration: "none", color: "black" }} href="/photos">
        <div className={styles.preview} data-testid="photopreview">
          <p className={styles.title}>Photos</p>
          <div classname={styles.previewContent}>
            <img
              style={{ width: 100 }}
              src="https://dashboard-images-bucket.s3.eu-west-2.amazonaws.com/t1"
            />
          </div>
        </div>
      </a>
    );
  }
}
