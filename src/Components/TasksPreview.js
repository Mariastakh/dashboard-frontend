import React, { Component } from "react";
import styles from "./Preview.module.css";
import container from "../assets/Container.png";

export default class TasksPreview extends Component {
  constructor(props) {
    super(props);

    this.TaskList = this.TaskList.bind(this);
  }

  TaskList(props) {
    const tasks = props.tasks;
    console.log("TASKS", tasks);

    if (tasks !== undefined && tasks !== "no tasks") {
      console.log("TASKS ARE DEFINED");
      const taskList = tasks.map((task, index) => <li key={index} task={task}></li>);
      return <ul>{taskList}</ul>;
    } else {
      return <div></div>;
    }
    // const numbers = [1, 2];
    // const listItems = numbers.map((number) => <li>{number}</li>);
  }

  render() {
    return (
      <a style={{ textDecoration: "none", color: "black" }} href="/tasks">
        <div className={styles.preview} data-testid="taskspreview">
          <p className={styles.title}>Tasks</p>
          {/* {this.props.tasks} */}
          {/* <this.TaskList tasks={this.props.tasks} />, */}

           <b>{this.props.tasks===undefined ? <div></div> :  <this.TaskList tasks={this.props.tasks} />}</b>.
        </div>
      </a>
    );
  }
}
