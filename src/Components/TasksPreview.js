import React, { Component } from "react";
import styles from "./Preview.module.css";
import container from "../assets/Container.png";

export default class TasksPreview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className={styles.preview} data-testid="taskspreview">
          {/* Tasks */}
          <a href="/tasks">
            <img className={styles.img} src={container} alt="tasks preview" />
          </a>
        </div>
      </>
    );
  }
}
