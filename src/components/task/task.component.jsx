import "./task.style.css";

const Task = ({ text, onDeleteClick: deleteClickHandler }) => {
  const copyClickHandler = () => {
    navigator.clipboard.writeText(text).then(
      function () {
        //Show successful toast
      },
      function (err) {
        //Show error toast
      }
    );
  };
  return (
    <div>
      <div className={"task-container"}>
        <span className={"task-text"}>{text}</span>
        <span className={"task-buttons-container"}>
          <span className={"task-copy-btn"} onClick={copyClickHandler}>
            V
          </span>
          <span className={"task-delete-btn"} onClick={deleteClickHandler}>
            X
          </span>
        </span>
      </div>
      <hr className="hori-row" />
    </div>
  );
};

export default Task;
