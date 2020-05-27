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

      // we only get event name (status) and type (checkbox)

      if (event.target.name === "status") {
        const checked = event.target.checked;
        console.log("checkbox!");

        const theTask = tasks.filter((task) => task.id === updatedTask.id);
        console.log(theTask[0]);
        theTask[0].status = !theTask[0].status;
        console.log(theTask);

        // setTasks((tasks) =>
        //   tasks.map((task) => {
        //     if (task.id === updatedTask.id) {
        //       return theTask[0];
        //     } else {
        //       return task;
        //     }
        //   })
        // );

        saveTask(theTask[0]).then(() => {
          toast.success("Task status updated.");
        });
      }

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
