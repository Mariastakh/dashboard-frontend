import React, { Component } from "react";
import styles from "./Preview.module.css";
import container from "../assets/Container.png";

export default class TasksPreview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a style={{ textDecoration: "none", color: "black" }} href="/tasks">
        <div className={styles.preview} data-testid="taskspreview">
        <p className={styles.title}>Tasks</p>
        </div>
      </a>
    );
  }
}
