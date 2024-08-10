import { useTodos } from "../hooks/use-todos";
import { TodoItem } from "./TodoItem";

export function TodosList() {
  const todos = useTodos();

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}
