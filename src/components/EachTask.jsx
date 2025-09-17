import { Link } from "react-router-dom";
import "./EachTask.css";

export function EachTask({ tasks, getTimeLeft }) {
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
        tasks.slice(0, 4).map((task, index) => (
          <div className="each-task" key={index}>
            <div className="todo">
              <p>{task.tasks}</p>
            </div>
            <div className="due-date">
              <p>{getTimeLeft(task.dueDate)}</p>
            </div>
          </div>
        ))
      )}

      {tasks.length > 4 && (
        <div className="see-more-tasks">
          <Link className="see-more-tasks-link" to={"/Add-todo"}>
            ALL TASKS
          </Link>
        </div>
      )}
    </>
  );
}
