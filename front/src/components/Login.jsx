import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try{
      await loginUser({email, password, role});
      navigate("/");
    }catch (err){
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="login">
     
      <h2> Login </h2>
      {error && <p className="error">{error}</p>}
      
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        <button type="submit"> Login </button>
      </form>
    
    </div>
  );
}

export default Login;