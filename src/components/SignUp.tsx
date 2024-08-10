import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Form } from "./Form";

export function SignUp() {
  const navigate = useNavigate();

  const handleSignUp = async (email: string, pass: string) => {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, pass);
    navigate("/");
  };

  return <Form title="Sign Up" handleClick={handleSignUp} />;
}
