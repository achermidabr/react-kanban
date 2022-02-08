import React from "react";
import "./tasklist.css";

export default function TaskList(props) {
  return (
    <div className="tasklist">
      <div className="title">{props.title}</div>
      <div className="content"></div>
    </div>
  );
}
