import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isAdmin: boolean;
  formattedDate: string;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isAdmin, formattedDate, onClose }) => {
  return (
    <div className="md:hidden mt-4 pb-4 animate-fade-in bg-gov-blue text-white rounded-b-lg shadow-lg">
      <nav className="flex flex-col space-y-2 px-4">
        {/* Data atual */}
        <div className="flex justify-between items-center py-2">
          <span className="text-sm font-medium">{formattedDate}</span>
        </div>

        {/* Links principais */}
        <Link
          to="/transparencia"
          onClick={onClose}
          className="py-2 px-4 hover:bg-gov-blue-dark rounded transition"
        >
          Transparência
        </Link>

        <Link
          to="/servicos"
          onClick={onClose}
          className="py-2 px-4 hover:bg-gov-blue-dark rounded transition"
        >
          Serviços
        </Link>

        {/* Se o usuário não for admin */}
        {!isAdmin ? (
          <>
            <div className="border-t border-white/20 my-2"></div>

            <p className="text-xs uppercase text-white/70 px-4 mt-2">Área Restrita</p>

            <Button
              asChild
              className="bg-white text-gov-blue w-full mt-2 hover:bg-gov-blue-dark hover:text-white"
              onClick={onClose}
            >
              <Link to="/login">Acessar como Usuário</Link>
            </Button>

            <Button
              asChild
              className="bg-gov-blue-dark w-full mt-2 hover:bg-white hover:text-gov-blue"
              onClick={onClose}
            >
              <Link to="/admin/login">Acessar como Administrador</Link>
            </Button>
          </>
        ) : (
          <Button
            asChild
            className="bg-gov-blue-dark w-full mt-4 hover:bg-white hover:text-gov-blue"
            onClick={onClose}
          >
            <Link to="/admin/dashboard">Painel do Admin</Link>
          </Button>
        )}
      </nav>
    </div>
  );
};

export default MobileMenu;
