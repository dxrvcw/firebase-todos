import { getAuth } from "firebase/auth";
import { getDatabase, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { ITodo } from "../lib/types";

interface ITodosState {
  [key: string]: Omit<ITodo, "id">;
}

export function useTodos() {
  const { currentUser } = getAuth();

  const [todos, setTodos] = useState<ITodosState>({});
  const db = getDatabase();

  useEffect(() => {
    const todosRef = ref(db, `users/${currentUser?.uid}/todos`);
    const unsubscribe = onValue(todosRef, (snapshot) => {
      const data = snapshot.val();
      if (JSON.stringify(todos) !== JSON.stringify(data)) setTodos(data);
    });

    return () => unsubscribe();
  }, [db, currentUser, todos]);

  const todoItems = Object.entries(todos || {}).map(([key, value]) => ({
    id: key,
    ...value,
  }));

  return todoItems;
}
