import { getAuth, onAuthStateChanged, signOut, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddTodoForm } from "../components/AddTodoForm";
import { TodosList } from "../components/TodosList";

export function HomePage() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (!user) {
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h1>Home page</h1>
      <AddTodoForm />
      <TodosList />

      {user && (
        <button onClick={async () => await signOut(auth)}>
          Logout from {user.email}
        </button>
      )}
    </div>
  );
}
