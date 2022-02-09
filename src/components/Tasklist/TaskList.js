import React from "react";
import ProtTypes from "prop-types";
import "./tasklist.css";
import TaskItem from "../TaskItem/TaskItem";

export default function TaskList({
  title,
  taskState,
  onAddTask,
  tasks,
  onTaskUpdate,
  onDeleteTask
}) {
  const addTask = () => {
    console.log("Calling function in TaskList");
    onAddTask("New Task!", taskState);
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              taskState={task.state}
              onTaskUpdate={onTaskUpdate}
              onDeleteTask={onDeleteTask}
            />
          );
        })}
      </div>
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}

TaskList.propTypes = {
  title: ProtTypes.string.isRequired,
  onAddTask: ProtTypes.func.isRequired,
  tasks: ProtTypes.array.isRequired,
  taskState: ProtTypes.string.isRequired
};
