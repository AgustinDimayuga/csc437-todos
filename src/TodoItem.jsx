import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
function TodoItem({ name, isComplete }) {
  return (
      <li>
        <label className="mr-6">
          <input type="checkbox" checked={isComplete}/> {name}
        </label>
        <button className="text-gray-600">
          <FontAwesomeIcon icon={faTrashCan} title="trashcan" />
        </button>
      </li>
  );
}
export default TodoItem;
