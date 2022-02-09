import "./styles.css";
import "./components/Navbar/Navbar";
import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/Tasklist/TaskList";
import { useState } from "react";

let idAcc = 0;
const generateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    console.log("Calling function in App and id " + idAcc);
    const newTask = {
      id: generateId(),
      title,
      state
    };

    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };

  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList
          title="Pending"
          taskState="Pending"
          onAddTask={addTask}
          tasks={tasks.filter((t) => t.state === "Pending")}
          onTaskUpdate={updateTask}
        />
        <TaskList
          title="On Going"
          taskState="On Going"
          onAddTask={addTask}
          tasks={tasks.filter((t) => t.state === "On Going")}
          onTaskUpdate={updateTask}
        />
        <TaskList
          title="Done"
          taskState="Done"
          onAddTask={addTask}
          tasks={tasks.filter((t) => t.state === "Done")}
          onTaskUpdate={updateTask}
        />
      </div>
    </div>
  );
}
