import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import LoginPasswordRegister from "./LoginPasswordRegister";
import LoginPasswordReset from "./LoginPasswordReset";
import LoginPasswordRecover from "./LoginPasswordRecover";

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="cadastrar" element={<LoginPasswordRegister />} />
        <Route path="recuperar" element={<LoginPasswordRecover />} />
        <Route path="resetar" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
};

export default Login;
