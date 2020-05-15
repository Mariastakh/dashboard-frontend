import React, { Component } from "react";

export default class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: this.props.task,
    };

    this.handleTaskChange = this.handleTaskChange.bind(this);
  }

  handleTaskChange(event) {
    this.setState({ task: event.target.value });
    //this.props.handleTask();
  }

  handleSubmit = (event) => {
    event.preventDefault();
   this.props.handleTask(this.state.task);
  }

  render() {
    return (
      <>
     <form onSubmit={this.handleSubmit}>
        <input
          data-testid="taskinput"
          name="task"
          type="text"
          value={this.state.task}
          onChange={this.handleTaskChange}
          required
        />
        </form>
      </>
    );
  }
}
