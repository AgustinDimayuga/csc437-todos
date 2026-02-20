import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import TodoItem from "./TodoItem";
import AddTaskForm from "./AddTaskForm";
import { nanoid } from "nanoid";
import Modal from "./Modal";
const MY_INITIAL_TASK_LIST = [
  { id: "todo-0", name: "Eat", isComplete: true },
  { id: "todo-1", name: "Sleep", isComplete: false },
  { id: "todo-2", name: "Repeat", isComplete: true },
];
function App() {
  const [taskList, setTaskList] = useState(MY_INITIAL_TASK_LIST);
  const [isOpen, setModal] = useState(false);
  function addTask(string) {
    const newTask = { id: nanoid(), name: string, isComplete: false };
    const taskListClone = [...taskList, newTask];
    setTaskList(taskListClone);
    setModal(false)
  }
  function toggleTaskCompleted(id) {
    const updatedTasks = taskList.map((task) => {
      if (id === task.id) {
        // use object spread to make a new object whose `isComplete` prop has been inverted
        return { ...task, isComplete: !task.isComplete };
      } else {
        return task;
      }
    });
    setTaskList(updatedTasks);
  }
  function deleteTask(id) {
    const updatedTasks = taskList.filter((task) => task.id != id);
    setTaskList(updatedTasks);
  }

  return (
    <main>
      {" "}
      {/* Reminder: React code uses className instead of class */}
      <div className="flex flex-col items-start gap-4">
        <button onClick={() => setModal(true)}className="border-2 rounded-xl p-1.5 bg-blue-600 hover:bg-blue-800 active:bg-blue-950 text-white">
          New Task
        </button>
        <Modal
          headerLabel="New Task"
          isOpen={isOpen}
          onCloseRequested={() => setModal(false)}
        >
          <AddTaskForm onNewTask={addTask} />
        </Modal>
        <section className="text-left">
          <h1 className="text-xl font-bold">To do</h1>
          <ul>
            {taskList.map((task) => (
              <TodoItem
                name={task.name}
                isComplete={task.isComplete}
                key={task.id}
                updateTask={() => toggleTaskCompleted(task.id)}
                deleteTask={() => deleteTask(task.id)}
              />
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default App;
