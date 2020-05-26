import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getTasks, saveTask } from "../api/tasksApi";
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

  function handleChange(updatedTask) {
    return (event) => {
      const name = event.target.value;

      setTasks((tasks) =>
        tasks.map((task) =>
          task.id === updatedTask.id ? { ...updatedTask, name } : task
        )
      );
    };
  }

  function handleSubmit(updatedTask) {
    return (event) => {
      event.preventDefault();
      console.log("this is the new task: ", updatedTask);
      saveTask(updatedTask).then(() => {
        toast.success("Task saved.");
      });
    };
  }

  useEffect(() => {
    getTasks().then((response) => {
      setTasks(response);
    });
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
