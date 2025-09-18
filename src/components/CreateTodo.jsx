import { use, useRef, useState } from "react";
import { AddTask } from "../pages/Home/AddTask";
import { EachTask } from "./EachTask";
import { TodoInput } from "./TodoInput";
import removeIcon from "../assets/svg/chevron-left.svg";
import gsap from "gsap";
import "./CreateTodo.css";

export function CreateTodo({ tasks, setTasks, getTimeLeft }) {
  const todoTaskRef = useRef(null);

  const handleClickView = () => {
    gsap.to(todoTaskRef.current, {
      bottom: "0%",
      duration: 0.35,
      ease: "power2.out",
    });
    document.body.classList.add("no-scroll");
  };

  const handleClickHide = () => {
    gsap.to(todoTaskRef.current, {
      bottom: "-100%",
      duration: 0.35,
      ease: "power2.out",
    });
    document.body.classList.remove("no-scroll");
  };

  return (
    <>
      <AddTask handleClickView={handleClickView} />
      <div ref={todoTaskRef} className="todo-parent-container">
        <div className="task-container">
          <div className="remove-button" onClick={handleClickHide}>
            <img src={removeIcon} alt="" />
          </div>
          <h1>TASKS</h1>
          <EachTask
            tasks={tasks}
            setTasks={setTasks}
            getTimeLeft={getTimeLeft}
          />
        </div>

        <TodoInput tasks={tasks} setTasks={setTasks} />
      </div>
    </>
  );
}
