import React, { Component } from "react";
import axios from "axios";
import Task from "../Components/Task";

export default class TasksPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        { name: "wash up", status: false, id: 13 },
        { name: "get up on time", status: true, id: 12 },
      ],
      updatedTask: "",
    };

    this.handleTask = this.handleTask.bind(this);
  }

  handleTask(data) {
    // change tasks:
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((el, index) =>
        index === data[3] ? { ...el, name: data[0] } : el
      ),
    }));
    this.setState({ updatedTask: this.state.tasks[data[3]] });
    console.log("the", this.state.tasks[data[3]]);
  }

  componentDidUpdate(prevState) {
    if (prevState.tasks !== this.state.tasks) {
      axios
        .post("http://localhost:8000/update-task", {
          updatedTask: this.state.tasks,
        })
        .then((response) => {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  Tasks(options) {
    //console.log("tasks inside options: ", options.tasks[0]);
    // const tasks = [
    //   { name: "wash up", status: false, id: 13 },
    //   { name: "get up on time", status: true, id: 12 },
    // ];
    console.log("OPTONS: ", options.tasks[0].name);

    if (options.tasks.length === 0) {
      return <>You have no tasks</>;
    } else {
      const taskList = options.tasks.map((task, index) => (
        <Task task={task} id={index} handleTask={options.handleTask} />
      ));
      return <ul>{taskList}</ul>;
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:8000/tasks")
      .then((response) => {
        // this.setState({ tasks: response.data.tasks });
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
