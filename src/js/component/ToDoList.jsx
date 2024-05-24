import React, { useState } from "react";

const ToDoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  }

  function handleRemove(removeTask) {
    const deleteTask = tasks.filter((_, index) => {
      return index !== removeTask;
    });
    setTasks(deleteTask);
  }

  return (
    <div className="mt-5 m-5 p-5">
      <input
        type="text"
        className="todolistInput form-control"
        placeholder="Whats needs to be done?"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <div>
        <ol className="list-group">
          {tasks.map((task, index) => {
            return (
              <li className="fontList list-group-item" key={index}>
                {task}
                <button
                  onClick={() => handleRemove(index)}
                  className="d-flex justify-content"
                >
                  delete
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default ToDoList;
