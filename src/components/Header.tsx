import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import MobileMenu from "@/components/MobileMenu";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useAdmin } from "@/contexts/AdminContext";
import AdminDropdown from "@/components/ui/AdminDropdown";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAccessDropdownOpen, setIsAccessDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAdmin } = useAdmin();
  const navigate = useNavigate();
  const location = useLocation();

  const isAdminLoginPage = location.pathname === "/admin/login";

  // Controla a transição ao rolar a página
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentDate = format(new Date(), "EEEE, d 'de' MMMM 'de' yyyy", {
    locale: ptBR,
  });
  const formattedDate =
    currentDate.charAt(0).toUpperCase() + currentDate.slice(1);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gov-blue shadow-xl backdrop-blur-sm rounded-b-2xl scale-[1.005]"
          : "bg-gov-blue"
      } text-white`}
    >
      <div className="gov-container py-4 px-4 md:px-8">
        <div className="flex justify-between items-center transition-all duration-300">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center hover:opacity-90 transition-opacity"
            >
              <span className="text-2xl font-bold mr-2 drop-shadow-sm">
                CGE
              </span>
              <span className="text-2xl font-light drop-shadow-sm">NET</span>
            </Link>
          </div>

          {/* Data atual */}
          <div className="hidden md:flex items-center mr-4">
            <span className="text-sm font-medium opacity-90">
              {formattedDate}
            </span>
          </div>

          {/* Menu mobile */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-gov-blue-dark"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>

          {/* Área direita (desktop) */}
          <div className="hidden md:flex items-center gap-3 relative">
            {!isAdmin && !isAdminLoginPage ? (
              <div className="relative">
                <Button
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-gov-blue flex items-center gap-1 shadow-sm"
                  onClick={() => setIsAccessDropdownOpen(!isAccessDropdownOpen)}
                >
                  Acessar
                  <ChevronDown className="h-4 w-4 transition-transform duration-300" />
                </Button>

                {isAccessDropdownOpen && (
                  <div
                    className="absolute right-0 mt-2 bg-white text-gov-blue rounded-xl shadow-lg w-44 overflow-hidden border border-gray-200 animate-fade-in"
                    onMouseLeave={() => setIsAccessDropdownOpen(false)}
                  >
                    <button
                      className="w-full px-4 py-2 text-left hover:bg-gray-100"
                      onClick={() => {
                        setIsAccessDropdownOpen(false);
                        navigate("/login");
                      }}
                    >
                      Usuário
                    </button>
                    <button
                      className="w-full px-4 py-2 text-left hover:bg-gray-100 border-t"
                      onClick={() => {
                        setIsAccessDropdownOpen(false);
                        navigate("/admin/login");
                      }}
                    >
                      Administrador
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <AdminDropdown />
            )}
          </div>
        </div>

        {/* Menu mobile */}
        {isMobileMenuOpen && (
          <MobileMenu
            isAdmin={isAdmin}
            formattedDate={formattedDate}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
