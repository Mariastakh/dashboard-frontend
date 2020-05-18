import React, { Component } from "react";
import styles from "./Preview.module.css";
import container from "../assets/Container.png";
import { Pie } from "react-chartjs-2";

export default class ClothesPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataset: [
        {
          data: [153, 170, 189, 171, 146, 171],
          backgroundColor: [
            "#DE9E36",
            "#DEB841",
            "#37323E",
            "#6D6A75",
            "#BFBDC1",
            "#D1C6AD",
          ],
          borderColor: "transparent",
        },
      ],
    };
  }

  render() {
    return (
      <>
        <div className={styles.preview} data-testid="clothespreview">
          Clothes
          {/* <img className={styles.img} src={container} alt="clothes pie chart" /> */}
          <Pie data={{ datasets: this.state.dataset }} />
        </div>
      </>
    );
  }
}
