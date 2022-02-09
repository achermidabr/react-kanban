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

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList title="Pending" onAddTask={addTask} tasks={tasks} />
        {/* <TaskList title="On Going" />
        <TaskList title="Done" /> */}
      </div>
    </div>
  );
}
