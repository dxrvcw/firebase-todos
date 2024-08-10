import { Link } from "react-router-dom";
import { SignUp } from "../components/SignUp";

export function RegisterPage() {
  return (
    <div>
      <h1>Register Page</h1>

      <SignUp />
      <p>
        Already have an account? <Link to={"/login"}>Sign in</Link>
      </p>
    </div>
  );
}
