import addIcon from "../../assets/svg/plus-icon.svg";
import "./AddTask.css";

export function AddTask({ handleClick, addTaskImageRef }) {
  return (
    <div className="add-task-button" onClick={handleClick}>
      <img ref={addTaskImageRef} src={addIcon} alt="" />
    </div>
  );
}
