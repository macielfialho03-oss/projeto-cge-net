import ForgotPassword from "./pages/ForgotPassword";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AdminProvider } from "./contexts/AdminContext";

import Header from "@/components/Header";

import Index from "./pages/Index";
import Login from "./pages/Login";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

const queryClient = new QueryClient();

// Layout global que controla quando o Header aparece
const LayoutWithHeader = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  // Páginas que NÃO devem exibir o Header
  const hideHeader =
    location.pathname.startsWith("/admin/dashboard") ||
    location.pathname === "/esqueceu-senha";

  return (
    <>
      {!hideHeader && <Header />}
      <div className={!hideHeader ? "pt-20" : ""}>{children}</div>
    </>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AdminProvider>
          <BrowserRouter>
            <LayoutWithHeader>
              <Routes>
                {/* Páginas principais */}
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route path="/privacidade" element={<Privacy />} />
                <Route path="/esqueceu-senha" element={<ForgotPassword />} />

                {/* Área administrativa */}
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />

                {/* Página 404 */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </LayoutWithHeader>
          </BrowserRouter>

          {/* Toast notifications */}
          <Toaster />
          <Sonner />
        </AdminProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
