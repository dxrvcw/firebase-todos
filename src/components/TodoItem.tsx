import { getAuth } from "firebase/auth";
import { completeTodo, deleteTodo } from "../lib/todosActions";
import { ITodo } from "../lib/types";

export function TodoItem({ id, title, completed }: ITodo) {
  const { currentUser } = getAuth();

  const handleDelete = async () => {
    await deleteTodo(currentUser?.uid!, id);
  };

  const handleComplete = async () => {
    await completeTodo(currentUser?.uid!, id, !completed);
  };

  return (
    <div>
      <p>{title}</p>
      <input type="checkbox" checked={completed} onChange={handleComplete} />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
