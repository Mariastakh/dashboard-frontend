import React, { Component } from "react";
import styles from "./Preview.module.css";
import container from "../assets/Container.png";

export default class NewsPreview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.preview}>
        <div data-testid="newspreview">
        <p className={styles.title}>News</p>
          {this.props.title}<br></br>
          {this.props.content}
        </div>
      </div>
    );
  }
}
