import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { text: "Give dog a bath", done: true },
    { text: "Do laundry", done: true },
    { text: "Vacuum floor", done: false }
  ]);

  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input) return;
    setTasks([...tasks, { text: input, done: false }]);
    setInput("");
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  const clearCompleted = () => {
    setTasks(tasks.filter(task => !task.done));
  };

  return (
    <div>
      <h1>To Do List</h1>

      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            onClick={() => toggleTask(index)}
            style={{
              textDecoration: task.done ? "line-through" : "none",
              cursor: "pointer"
            }}
          >
            {task.text}
          </li>
        ))}
      </ul>

      <button onClick={clearCompleted}>Clear Completed</button>

      <br /><br />

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task..."
      />
      <button onClick={addTask}>Submit</button>
    </div>
  );
}

export default App;