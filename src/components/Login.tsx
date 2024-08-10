import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Form } from "./Form";

export function Login() {
  const navigate = useNavigate();

  const handleLogin = async (email: string, pass: string) => {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, pass);
    navigate("/");
  };

  return <Form title="Login" handleClick={handleLogin} />;
}
