import React, { Component } from "react";
import axios from "axios";
import Task from "../Components/Task";

export default class TasksPage extends Component {
  constructor(props) {
    super(props);

    this.state = { tasks: "" };
    this.handleTask = this.handleTask.bind(this);
  }

  handleTask(data) {
    console.log(data);
  }

  Tasks(options) {
    const tasks = ["task one", "task two"];

    if (tasks.length === 0) {
      return <>You have no tasks</>;
    } else {
      const taskList = tasks.map((task) => (
        <Task task={task} handleTask={options.handleTask} />
      ));
      return <ul>{taskList}</ul>;
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:8000/tasks")
      .then((response) => {
        this.setState({ tasks: response.data.tasks });
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  }

  render() {
    return (
      <>
        tasks page
        <br></br>
        <this.Tasks tasks={this.state.tasks} handleTask={this.handleTask} />
      </>
    );
  }
}
