import React from "react";

function Task(props) {
  return (
    <>
      <form onSubmit={props.onSubmit(props.task)}>
        <input
          data-testid="taskinput"
          name="task"
          type="text"
          value={props.task.name}
          onChange={props.onChange(props.task)}
          required
        />
      </form>

      <label>
        Status:
        <input
          name="status"
          type="checkbox"
          checked={props.task.status}
          onChange={props.onChange(props.task)}
        />
      </label>
    </>
  );
}

export default Task;
