import { useRef, useState } from "react";
import { AddTask } from "../pages/Home/AddTask";
import { EachTask } from "./EachTask";
import { TodoInput } from "./TodoInput";
import gsap from "gsap";
import "./CreateTodo.css";

export function CreateTodo({ tasks, setTasks, getTimeLeft }) {
  const [isOpen, setIsOpen] = useState(false);

  const todoTaskRef = useRef(null);

  const addTaskImageRef = useRef(null);

  const handleClick = () => {
    if (!isOpen) {
      gsap.to(todoTaskRef.current, {
        bottom: "0%",
        duration: 0.35,
        ease: "power2.out",
      });

      gsap.to(addTaskImageRef.current, {
        rotation: -45,
      });

      setIsOpen(true);
    } else {
      gsap.to(todoTaskRef.current, {
        bottom: "-100%",
        duration: 0.35,
        ease: "power2.out",
      });
      gsap.to(addTaskImageRef.current, {
        rotation: 0,
        duration: 0.35,
        ease: "power2.out",
      });
      setIsOpen(false);
    }
  };

  return (
    <>
      <div className="container">
        <AddTask handleClick={handleClick} addTaskImageRef={addTaskImageRef} />
        <div ref={todoTaskRef} className="todo-parent-container">
          <TodoInput tasks={tasks} setTasks={setTasks} />

          <div className="tasks-container">
            <h1>TASKS</h1>
            <EachTask tasks={tasks} getTimeLeft={getTimeLeft} />
          </div>
        </div>
      </div>
    </>
  );
}
