import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDown, User, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "@/contexts/AdminContext";

const AdminDropdown: React.FC = () => {
  const navigate = useNavigate();
  const { setIsAdmin } = useAdmin();

  const handleLogout = () => {
    setIsAdmin(false);
    alert("Você saiu da conta de administrador.");
    navigate("/");
    setTimeout(() => window.location.reload(), 200);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex justify-center w-full rounded-md bg-gov-blue text-white px-4 py-2 text-sm font-medium hover:bg-gov-dark focus:outline-none">
          <User className="mr-2 h-4 w-4" />
          Admin
          <ChevronDown className="ml-2 h-4 w-4" />
        </MenuButton>
      </div>

      <MenuItems className="absolute right-0 mt-2 w-44 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg">
        <div className="py-1">
          <MenuItem>
            {({ active }) => (
              <button
                onClick={handleLogout}
                className={`${
                  active ? "bg-gray-100" : ""
                } flex w-full items-center px-4 py-2 text-sm text-red-600`}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Sair
              </button>
            )}
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
};

export default AdminDropdown;
