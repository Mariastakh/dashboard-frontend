import React, { Component } from "react";

export default class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.task.name,
      status: this.props.task.status,
      task_id: this.props.task.id,
      id: this.props.id,
    };

    this.handleTaskChange = this.handleTaskChange.bind(this);
  }

  handleTaskChange(event) {
    this.setState({ name: event.target.value });
    //this.props.handleTask();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleTask([
      this.state.name,
      this.state.status,
      this.state.task_id,
      this.state.id]
    );
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            data-testid="taskinput"
            name="task"
            type="text"
            value={this.state.name}
            onChange={this.handleTaskChange}
            required
          />
        </form>
      </>
    );
  }
}
