import "./App.css";
import Task from "./components/task/task.component";

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
      <div className="creation-seaction"></div>
      <div className="todo-list-section">
        {tasks.map((task) => {
          return <Task text={task} key={task} />;
        })}
      </div>
    </div>
  );
}

export default App;
