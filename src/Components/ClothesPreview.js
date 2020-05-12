import React, { Component } from "react";
import styles from "./Preview.module.css";
import container from "../assets/Container.png";

export default class ClothesPreview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className={styles.preview} data-testid="clothespreview">
          {/* Clothes */}
          <img className={styles.img} src={container} alt="clothes pie chart" />
        </div>
      </>
    );
  }
}
