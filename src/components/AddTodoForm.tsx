import { getAuth } from "firebase/auth";
import { useState } from "react";
import { addTodo } from "../lib/todosActions";

export function AddTodoForm() {
  const { currentUser } = getAuth();
  const [title, setTitle] = useState("");

  const handleClick = async () => {
    await addTodo(currentUser?.uid!, title);
    setTitle("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter todo title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
}
