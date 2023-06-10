import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault(); // This line prevents the form from submitting the default way
    try {
      const response = await axios.post("https://express-t4.onrender.com/api/login", {
        username: email,
        password: password,
      });

      if (response.status === 200) {
        navigate("/users");
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input  
          className="input-field"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input-field"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
