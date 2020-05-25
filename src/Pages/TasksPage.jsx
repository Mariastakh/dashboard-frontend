import React, { useState, useEffect } from "react";
import { getTasks } from "../api/tasksApi";
import Task from "../Components/Task";

function TasksPage() {
  const [tasks, setTasks] = useState([]);

  function handleChange(Updatedtask) {
    return (event) => {
      const name = event.target.value; // I don't know what event is anymore sadcry

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

  function Tasks(options) {
    if (options.tasks.length === 0) {
      return <>You have no tasks</>;
    } else {
      const taskList = options.tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      ));
      return <ul>{taskList}</ul>;
    }
  }

  useEffect(() => {
    getTasks().then((response) => setTasks(response.tasks));
  }, []);

  return (
    <>
      tasks page
      <br></br>
      <Tasks tasks={tasks} />
    </>
  );
}

export default TasksPage;
