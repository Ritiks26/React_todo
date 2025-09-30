import { string } from "prop-types";
import menu from "../../assets/svg/hamburger-menu.svg";
import { CreateTodo } from "../../components/CreateTodo";
import "./ExpiringTasks.css";

export function ExpiringTasks({ tasks, setTasks, Countdown }) {
  const expiringSoon = tasks.filter((task) => {
    if (!task.dueDate) return false;

    const now = new Date();
    const due = new Date(task.dueDate);

    const diff = due - now;

    return diff > 0 && diff <= 6 * 60 * 60 * 1000;
  });

  return (
    <>
      <div className="quotes-container">
        <div className="hero-first-child">
          <div className="todo-container">
            <p>YOU CAN DO IT!</p>
            <p>YOU CAN DO IT!</p>
            <p>YOU CAN DO IT!</p>
            <p>YOU CAN DO IT!</p>
            <p>YOU CAN DO IT!</p>
            {/* <img src="" alt="" /> */}
          </div>

          <div className="quotes-text-container">
            <p className="quotes-text">DO IT NOW!</p>
          </div>
        </div>

        <div className="hero-second-child">
          <div className="quotes-text-container">
            <p className="quotes-text">PLAN. DO. DONE.</p>
          </div>
          <div className="todo-container-2">
            <p>CREATE TO-DO</p>
            <p>WITH EASE</p>
            <p>WITH EASE</p>
            <p>WITH EASE</p>
            <p>WITH EASE</p>
            <p>WITH EASE</p>
            <img
              src="https://images.unsplash.com/photo-1683464874762-50ae2e773e39?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </div>

      {expiringSoon.length === 0 ? (
        <p className="expiring-task-message">No tasks expiring in 6 hours.</p>
      ) : (
        expiringSoon.map((task, index) => (
          <div key={index} className="filtered-task">
            <div className="task-details">
              {" "}
              <p className="task-name">{task.tasks}</p>
              <p className="task-timer">
                <Countdown dueDate={task.dueDate} />
                <br /> <span>TASK EXPIRING SOON.</span>
              </p>
            </div>
            <div className="menu-button">
              <img src={menu} alt="" />
            </div>
          </div>
        ))
      )}
      <CreateTodo tasks={tasks} setTasks={setTasks} Countdown={Countdown} />
    </>
  );
}
