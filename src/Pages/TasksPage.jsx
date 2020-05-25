import React, { useState, useEffect } from "react";
import { getTasks } from "../api/tasksApi";
import Task from "../Components/Task";

const Tasks = (props) => {
  if (props.tasks.length === 0) {
    return <>You have no tasks</>;
  } else {
    const taskList = props.tasks.map((task) => (
      <Task
        key={task.id}
        task={task}
        onChange={props.handleChange}
        onSubmit={props.handleSubmit}
      />
    ));
    return <ul>{taskList}</ul>;
  }
};

function TasksPage() {
  const [tasks, setTasks] = useState([]);

  function handleChange(Updatedtask) {
    return (event) => {
      const name = event.target.value;

      setTasks((tasks) =>
        tasks.map((task) =>
          task.id === Updatedtask.id ? { ...Updatedtask, name } : task
        )
      );
    };
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  useEffect(() => {
    getTasks().then((response) => setTasks(response.tasks));
  }, []);

  return (
    <>
      tasks page
      <br></br>
      <Tasks
        tasks={tasks}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default TasksPage;
