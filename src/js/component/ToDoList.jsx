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

  return (
    <div>
      {/* <form action=""> */}
      <input
        type="text"
        placeholder="whats need to be done"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <div>
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ol>
      </div>
      {/* </form> */}
    </div>
  );
};

export default ToDoList;
