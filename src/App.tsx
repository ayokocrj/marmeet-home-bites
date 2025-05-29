
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages - Client
import Welcome from "./pages/Welcome";
import ClientOnboarding from "./pages/client/Onboarding";
import ClientHome from "./pages/client/Home";
import MealDetail from "./pages/client/MealDetail";
import Checkout from "./pages/client/Checkout";
import Confirmation from "./pages/client/Confirmation";

// Pages - Chef
import ChefSignup from "./pages/chef/Signup";
import ChefDashboard from "./pages/chef/Dashboard";
import ChefProfile from "./pages/chef/Profile";
import EditDish from "./pages/chef/EditDish";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Protected Route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  
  if (!isAuthenticated) {
    return <Navigate to="/welcome" replace />;
  }
  
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Welcome/Auth */}
          <Route path="/welcome" element={<Welcome />} />
          
          {/* Client Routes */}
          <Route path="/client/onboarding" element={
            <ProtectedRoute>
              <ClientOnboarding />
            </ProtectedRoute>
          } />
          <Route path="/client/home" element={
            <ProtectedRoute>
              <ClientHome />
            </ProtectedRoute>
          } />
          <Route path="/client/meal/:id" element={
            <ProtectedRoute>
              <MealDetail />
            </ProtectedRoute>
          } />
          <Route path="/client/checkout" element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          } />
          <Route path="/client/confirmation" element={
            <ProtectedRoute>
              <Confirmation />
            </ProtectedRoute>
          } />
          
          {/* Chef Routes */}
          <Route path="/chef/signup" element={
            <ProtectedRoute>
              <ChefSignup />
            </ProtectedRoute>
          } />
          <Route path="/chef/dashboard" element={
            <ProtectedRoute>
              <ChefDashboard />
            </ProtectedRoute>
          } />
          <Route path="/chef/profile/:id" element={
            <ProtectedRoute>
              <ChefProfile />
            </ProtectedRoute>
          } />
          <Route path="/chef/edit-dish/:id?" element={
            <ProtectedRoute>
              <EditDish />
            </ProtectedRoute>
          } />
          
          {/* Default Routes */}
          <Route path="/" element={<Navigate to="/welcome" replace />} />
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
