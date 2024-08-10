import { Link } from "react-router-dom";
import { Login } from "../components/Login";

export function LoginPage() {
  return (
    <div>
      <h1>Login Page</h1>

      <Login />
      <p>
        Or <Link to={"/register"}>register</Link>
      </p>
    </div>
  );
}
