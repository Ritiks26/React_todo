import backArrow from "../../assets/svg/chevron-left.svg";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { TodoInput } from "../../components/TodoInput";
import "./add-todo.css";

function TaskItem({ onDelete, task, Countdown }) {
  const controls = useAnimation();

  return (
    <motion.div
      className="each-task"
      drag="x"
      dragConstraints={{ left: -150, right: 0 }}
      animate={controls}
      onDragEnd={async (e, info) => {
        if (info.offset.x < -120) {
          await controls.start({
            x: -500,
            opacity: 0,
            transition: { duration: 0.2 },
          });
          onDelete(task.id);
        } else {
          controls.start({
            x: 0,
            transition: { type: "spring", stiffness: 300, damping: 15 },
          });
        }
      }}
      whileDrag={{ scale: 0.95, backgroundColor: "rgb(255, 227, 227, 1)" }}
    >
      <div className="todo">
        <p>{task.tasks}</p>
      </div>
      <div className="due-date">
        <p>
          <Countdown dueDate={task.dueDate} />
        </p>
      </div>
    </motion.div>
  );
}

export function AddTodo({ setTasks, tasks, Countdown }) {
  const deleteTodo = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <div className="header">
        <div className="left-section">
          <Link to={"/"}>
            <img src={backArrow} alt="" />
          </Link>
        </div>{" "}
      </div>

      <div className="input-and-task-container">
        <div className="tasks-container">
          {tasks.length === 0 ? (
            <div className="delete-tasks-message">
              <p>Add todo!</p>
              <span>
                Swipe left to <strong>delete</strong> tasks.
              </span>
            </div>
          ) : (
            tasks.map((task) => (
              <TaskItem
                key={task.id}
                onDelete={deleteTodo}
                task={task}
                Countdown={Countdown}
              />
            ))
          )}
        </div>

        <div className="input-container-parent">
          <TodoInput setTasks={setTasks} tasks={tasks} />
        </div>
      </div>
    </>
  );
}
