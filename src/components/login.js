import React, { useState } from "react";
import axios from "axios"; // Importando Axios
import "./login.css";

export default ({ onReceive }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost/usuarios/login", {
        email,
        password,
      });

      const data = response.data;
      onReceive(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post("URL_DO_SEU_BACKEND/usuarios", {
        email,
        password,
      });

      const data = response.data;
      onReceive(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login">
      <h2 className="login-header">Login</h2>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} className="login-button">
        Entrar
      </button>
      <button onClick={handleRegister} className="login-button">
        Cadastrar
      </button>
    </div>
  );
};
