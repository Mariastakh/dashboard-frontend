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
    </>
  );
}

export default Task;
