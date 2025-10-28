import React from "react";
import { useAdmin } from "@/contexts/AdminContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AdminDashboard = () => {
  const { setIsAdmin } = useAdmin();
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAdmin(false);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-gov-blue mb-4">
          Painel do Administrador
        </h1>
        <p className="text-gray-600 mb-6">
          Bem-vindo! Aqui você poderá gerenciar serviços, notícias e usuários
          do portal CGE Net.
        </p>
        <Button onClick={handleLogout}>Sair</Button>
      </div>
    </div>
  );
};

export default AdminDashboard;
