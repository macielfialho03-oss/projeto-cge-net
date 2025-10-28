import React from "react";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "@/contexts/AdminContext";
import LoginForm from "@/components/LoginForm";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { loginLocal } = useAdmin();

  const handleLogin = ({ cpf, password }: { cpf: string; password: string }) => {
    loginLocal({ name: "Administrador", cpf, isAdmin: true });
    navigate("/admin/dashboard");
  };

  return (
    <main className="min-h-[calc(100vh-6rem)] flex items-center justify-center bg-gray-50 pt-6">
      <LoginForm isAdmin onSubmit={handleLogin} />
    </main>
  );
};

export default AdminLogin;
