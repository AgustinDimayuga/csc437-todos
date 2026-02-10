function AddTaskForm({ name, isComplete }) {
  return (
        <div>
          {" "}
          {/* Unfortunately comments in JSX have to be done like this */}
          <input
            className="border-2 rounded-xl p-2 mr-2"
            placeholder="New task name"
            aria-label="New task name"
          />
          <button className="border-2 rounded-xl p-1.5 bg-blue-600 hover:bg-blue-800 active:bg-blue-950 text-white">
            Add task
          </button>
        </div>
  );
}

export default AddTaskForm;