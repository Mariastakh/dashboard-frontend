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
          News<br></br>
          {this.props.title}<br></br>
          {this.props.content}
          <a href="/news">
            <img
              className={styles.img}
              src={container}
              alt="the latest news headline"
            />
          </a>
        </div>
      </div>
    );
  }
}
