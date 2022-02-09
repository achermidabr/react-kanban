import React from "react";
import ProtTypes from "prop-types";
import "./tasklist.css";
import TaskItem from "../TaskItem/TaskItem";
import plusIcon from "../../img/plus.png";

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

        {/* This line renders the right side of the && if left side is true. */}
        {tasks.length === 0 && <div className="empty-list">Empty List</div>}

        <button className="btn" onClick={addTask}>
          <img src={plusIcon} alt="plus" />
          Add Task
        </button>
      </div>
    </div>
  );
}

TaskList.propTypes = {
  title: ProtTypes.string.isRequired,
  onAddTask: ProtTypes.func.isRequired,
  tasks: ProtTypes.array.isRequired,
  taskState: ProtTypes.string.isRequired
};
