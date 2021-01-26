import React from "react";

const Task = ({ tasks, handleClickCheck, handleDeleteTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => {
        return (
          <li key={index}>
            <input
              type="checkbox"
              onChange={() => {
                handleClickCheck(index);
              }}
            ></input>
            <span className={task.isDone ? "done" : ""}>{task.title}</span>
            <span
              onClick={() => {
                handleDeleteTask(index);
              }}
            >X</span>
          </li>
        );
      })}
    </ul>
  );
};

export default Task;
