import addIcon from "../../assets/svg/chevron-left.svg";
import "./AddTask.css";

export function AddTask({ handleClickView }) {
  return (
    <div className="add-task-container">
      <div className="add-task-button" onClick={handleClickView}>
        <img src={addIcon} alt="" />
      </div>
    </div>
  );
}
