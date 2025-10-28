import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "@/components/LoginForm";
import { useAdmin } from "@/contexts/AdminContext";

const Login = () => {
  const navigate = useNavigate();
  const { loginLocal } = useAdmin();

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 py-12">
      <LoginForm
        isAdmin={false}
        onSubmit={({ cpf, password }) => {
          loginLocal({ name: "Usuário", cpf, isAdmin: false });
          navigate("/");
        }}
      />
    </main>
  );
};

export default Login;
