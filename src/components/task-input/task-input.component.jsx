import "./task-input.style.css";

const TaskInput = ({
  value,
  onChange: changeHandler,
  type,
  placeholder,
  onKeyDown: keyDownHandler,
}) => {
  return (
    <input
      className="task-input"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={changeHandler}
      onKeyDown={keyDownHandler}
    />
  );
};

export default TaskInput;
