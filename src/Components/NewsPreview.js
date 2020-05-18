import React, { Component } from "react";
import styles from "./Preview.module.css";
import container from "../assets/Container.png";

export default class NewsPreview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a style={{ textDecoration: "none", color: "black" }} href="/news">
        <div className={styles.preview}>
          <div data-testid="newspreview">
            <p className={styles.title}>News</p>
            <div className={styles.headline}>{this.props.title}</div>
            <br></br>
            <div className={styles.textContent}>{this.props.content}</div>
          </div>
        </div>
      </a>
    );
  }
}
