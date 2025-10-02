import { Link } from "react-router-dom";
import taskIcon from "../../assets/svg/tasks.svg";
import "./HeadingTop.css";

export function HeadingTop() {
  const formatDate = (date) => String(date ?? 0).padStart(2, "0");
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
              <h1 className="date">{formatDate(currentDate)}</h1>
            </div>
            <div className="day-year">
              <p className="day">{currentMonth}</p>
              <p className="year">{currentyear}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
