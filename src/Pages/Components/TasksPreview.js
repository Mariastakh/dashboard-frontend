import React, { Component } from "react";
import { Link } from "react-router-dom";
import container from "../../assets/Container.png";

export default class TasksPreview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div data-testid="taskspreview">
          Tasks
          <Link to="/tasks">
            <img src={container} alt="tasks preview" />
          </Link>
        </div>
      </>
    );
  }
}
