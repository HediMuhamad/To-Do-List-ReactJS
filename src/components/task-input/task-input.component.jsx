import "./task-input.style.css";

const TaskInput = ({ value, onChange: changeHandler, type, placeholder }) => {
  return (
    <input
      className="task-input"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={changeHandler}
    />
  );
};

export default TaskInput;
