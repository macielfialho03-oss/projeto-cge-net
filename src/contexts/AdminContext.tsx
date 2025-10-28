import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface User {
  name: string;
  cpf: string;
  isAdmin?: boolean;
}

interface AdminContextType {
  user: User | null;
  isAdmin: boolean;
  loginLocal: (user: User) => void;
  logout: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  // Função de login
  const loginLocal = (u: User) => {
    setUser(u);
    setIsAdmin(!!u.isAdmin);
    localStorage.setItem("cge_user", JSON.stringify(u));
  };

  // Função de logout
  const logout = () => {
    setUser(null);
    setIsAdmin(false);
    localStorage.removeItem("cge_user");
  };

  // Recupera o login salvo ao recarregar a página
  useEffect(() => {
    try {
      const stored = localStorage.getItem("cge_user");
      if (stored) {
        const u = JSON.parse(stored) as User;
        setUser(u);
        setIsAdmin(!!u.isAdmin);
      }
    } catch (error) {
      console.error("Erro ao recuperar usuário salvo:", error);
      localStorage.removeItem("cge_user");
    }
  }, []);

  return (
    <AdminContext.Provider value={{ user, isAdmin, loginLocal, logout }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = (): AdminContextType => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error("useAdmin deve ser usado dentro de um AdminProvider");
  }
  return context;
};
