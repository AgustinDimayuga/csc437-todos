import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import  TodoItem  from "./TodoItem";
import AddTaskForm from "./AddTaskForm"
function App() {
  return (
    <main className="m-4">
      {" "}
      {/* Reminder: React code uses className instead of class */}
      <div className="flex flex-col items-start gap-4">
        <AddTaskForm/>
        <section className="text-left">
          <h1 className="text-xl font-bold">To do</h1>
          <ul>
            <TodoItem name="Eat" isComplete={true} />
            <TodoItem name="Sleep" isComplete={false} />
            <TodoItem name="Repeat" isComplete={true}/>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default App;
