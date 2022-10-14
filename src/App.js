import "./App.css";

import Task from "./components/task/task.component";
import Button from "./components/button/button.component";
import TaskInput from "./components/task-input/task-input.component";

function App() {
  const tasks = [
    "Study to ISA Quiz",
    "Preparing ISA Report",
    "Reviewing AI's papers",
    "DBMS Report about final project with normalization",
    "MDB Report",
  ];

  return (
    <div className="App">
      <div className="creation-seaction">
        <TaskInput placeholder={"Add Task"} type={"text"} />
        <Button label={"Add"} />
      </div>
      <div className="todo-list-section">
        {tasks.map((task) => {
          return <Task text={task} key={task} />;
        })}
      </div>
    </div>
  );
}

export default App;
