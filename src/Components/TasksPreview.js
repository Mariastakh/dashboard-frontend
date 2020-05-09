import React, { Component } from "react";
import container from "../assets/Container.png";

export default class TasksPreview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div data-testid="taskspreview">
          Tasks
          <a href="/tasks">
            <img src={container} alt="tasks preview" />
          </a>
        </div>
      </>
    );
  }
}
