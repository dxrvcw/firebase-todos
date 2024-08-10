import { useState } from "react";

interface IFormProps {
  title: string;
  handleClick: (email: string, pass: string) => void;
}

export function Form({ title, handleClick }: IFormProps) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="Password"
      />
      <button onClick={() => handleClick(email, pass)}>{title}</button>
    </div>
  );
}
