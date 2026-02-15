import { useState } from "react";

function AddTaskForm({onNewTask }) {
  const [inputValue, setInputValue] = useState("");
  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleButtonClicked() {
    onNewTask(inputValue);
    setInputValue("")
  }

  return (
    <div>
      {" "}
      {/* Unfortunately comments in JSX have to be done like this */}
      <input
        className="border-2 rounded-xl p-2 mr-2"
        placeholder="New task name"
        aria-label="New task name"
        value={inputValue}
        onChange={handleChange}
      />
      <button
        onClick={handleButtonClicked}
        className="border-2 rounded-xl p-1.5 bg-blue-600 hover:bg-blue-800 active:bg-blue-950 text-white"
      >
        Add task
      </button>
    </div>
  );
}

export default AddTaskForm;
