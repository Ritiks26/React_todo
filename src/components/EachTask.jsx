import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import "./EachTask.css";

function TaskItem({ onDelete, task, getTimeLeft }) {
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
        <p>{getTimeLeft(task.dueDate)}</p>
      </div>
    </motion.div>
  );
}

export function EachTask({ tasks, setTasks, getTimeLeft }) {
  const deleteTodo = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <>
      {tasks.length === 0 ? (
        <div className="delete-tasks-message">
          <p>Add todo!</p>
          <span>
            Swipe left to <strong>delete</strong> tasks.
          </span>
        </div>
      ) : (
        tasks
          .slice(0, 4)
          .map((task, index) => (
            <TaskItem
              key={task.id}
              onDelete={deleteTodo}
              task={task}
              getTimeLeft={getTimeLeft}
            />
          ))
      )}

      {tasks.length > 4 && (
        <div className="see-more-tasks">
          <Link className="see-more-tasks-link" to={"/add-todo"}>
            ALL TASKS
          </Link>
        </div>
      )}
    </>
  );
}
