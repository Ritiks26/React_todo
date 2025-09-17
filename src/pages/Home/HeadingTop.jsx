import { Link } from "react-router-dom";
import taskIcon from "../../assets/svg/tasks.svg";
import "./HeadingTop.css";

export function HeadingTop() {
  const date = new Date();
  const currentDate = date.getDate();
  const currentMonth = date.toLocaleString("default", { month: "long" });
  const currentyear = date.getFullYear();

  return (
    <div className="heading-projects-container">
      <div className="heading-user-details">
        <div className="app-name">TaskTrackrr</div>
        <div className="user-project">
          <div className="date-container">
            <div>
              <h1 className="date">{currentDate}</h1>
            </div>
            <div className="day-year">
              <p className="day">{currentMonth}</p>
              <p className="year">{currentyear}</p>
            </div>
          </div>
          <div className="all-lists">
            <Link to={"/add-todo"}>
              <img src={taskIcon} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
