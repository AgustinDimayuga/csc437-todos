import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
function TodoItem({ name, isComplete, updateTask, deleteTask }) {
  return (
    <li>
      <label className="mr-6">
        <input onChange={updateTask} type="checkbox" checked={isComplete} />{" "}
        {name}
      </label>
      <button onClick={deleteTask} className="text-gray-600">
        <FontAwesomeIcon icon={faTrashCan} title="trashcan" />
      </button>
    </li>
  );
}
export default TodoItem;
