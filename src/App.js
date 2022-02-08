import "./styles.css";
import "./components/Navbar/Navbar";
import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/Tasklist/TaskList";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <TaskList title="Pending" />
        <TaskList title="On Going" />
        <TaskList title="Done" />
      </div>
    </div>
  );
}
