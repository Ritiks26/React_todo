import task from "../../assets/svg/tasks.svg";
import { Link } from "react-router-dom";
import "./AddTask.css";

export function AddTask({ handleClickView }) {
  return (
    <div className="navigate-button">
      <div className="all-li">
        <Link>
          <img src={task} alt="" />
        </Link>
      </div>
      <div className="add-task-container">
        <div className="add-task-button" onClick={handleClickView}>
          <div className="vertical-line"></div>
          <div className="horizontal-line"></div>
        </div>
      </div>

      <div className="all-li">
        <Link to={"/add-todo"}>
          <img src={task} alt="" />
        </Link>
      </div>
    </div>
  );
}
