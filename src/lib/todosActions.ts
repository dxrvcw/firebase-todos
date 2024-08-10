import { getDatabase, push, ref, remove, update } from "firebase/database";

export async function addTodo(userId: string, title: string) {
  const db = getDatabase();
  push(ref(db, "users/" + userId + "/todos"), {
    title,
    completed: false,
  });
}

export async function deleteTodo(userId: string, todoId: string) {
  const db = getDatabase();
  remove(ref(db, "users/" + userId + "/todos/" + todoId));
}

export async function completeTodo(
  userId: string,
  todoId: string,
  completed: boolean
) {
  const db = getDatabase();
  update(ref(db, "users/" + userId + "/todos/" + todoId), { completed });
}
