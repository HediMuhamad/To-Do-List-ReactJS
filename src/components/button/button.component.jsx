import "./button.style.css";

const Button = ({ label, onClick: clickHandler }) => {
  return (
    <button className="button" onClick={clickHandler}>
      {label}
    </button>
  );
};

export default Button;
