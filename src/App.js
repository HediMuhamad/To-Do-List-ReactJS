import "./App.css";

import Task from "./components/task/task.component";
import Button from "./components/button/button.component";
import TaskInput from "./components/task-input/task-input.component";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTaskValue, setNewTaskValue] = useState("");

  const addingNewTaskHandler = () => {
    if (!!newTaskValue && !tasks.includes(newTaskValue)) {
      setTasks([...tasks, newTaskValue]);
      setNewTaskValue("");
    }
  };

  const taskInputChangedHandler = (event) => {
    setNewTaskValue(event.target.value);
  };

  const taskInputKeyDownHandler = (event) => {
    if (
      event.code === "Enter" &&
      !!newTaskValue &&
      !tasks.includes(newTaskValue)
    ) {
      setTasks([...tasks, newTaskValue]);
      setNewTaskValue("");
    }
  };

  const deleteTaskHandler = (task) => {
    const newTasks = [];

    tasks.forEach((taskText) => {
      if (task !== taskText) {
        newTasks.push(taskText);
      }
    });

    setTasks(newTasks);
  };

  return (
    <div className="App">
      <div className="creation-seaction">
        <TaskInput
          placeholder={"Add Task"}
          type={"text"}
          value={newTaskValue}
          onChange={taskInputChangedHandler}
          onKeyDown={taskInputKeyDownHandler}
        />
        <Button label={"Add"} onClick={addingNewTaskHandler} />
      </div>
      <div className="todo-list-section">
        {tasks.map((task) => {
          return (
            <Task
              text={task}
              key={task}
              onDeleteClick={() => {
                deleteTaskHandler(task);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
