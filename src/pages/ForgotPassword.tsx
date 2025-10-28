import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("As instruções de redefinição foram enviadas para o seu e-mail cadastrado.");
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-semibold text-gov-blue mb-4">
          Recuperar Senha
        </h1>
        <p className="text-gray-600 mb-6">
          Informe seu CPF para receber as instruções de redefinição de senha.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Digite seu CPF"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gov-blue"
          />
          <button
            type="submit"
            className="bg-gov-blue text-white py-2 rounded-md hover:bg-gov-dark transition"
          >
            Enviar
          </button>
        </form>

        <Link
          to="/login"
          className="text-gov-blue hover:underline mt-6 inline-block"
        >
          Voltar para o Login
        </Link>
      </div>
    </main>
  );
};

export default ForgotPassword;
