// App.jsx
import { Box } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import LoadingSpinner from "./components/AdminComponents/LoadingSpinner";
import { useAuth } from "./contexts/AuthContext";
import { DataProvider } from "./contexts/DataContext";

// Layouts
import DashboardLayout from "./layout/DashboardLayout";
import MainLayout from "./layout/MainLayout";

// Pages Admin
import DashboardAdmin from "./pages/AdminPages/Dashboard";
import Shareholders from "./pages/AdminPages/Shareholders";
import ShareIssuance from "./pages/AdminPages/ShareIssuance";

// Pages Actionnaire
import Dashboard from "./pages/ActionnairePages/Dashboard";
import SharesPage from "./pages/ActionnairePages/SharesPage";

// Auth
import { useState } from "react";
import LoginPage from "./pages/LoginPage";

export default function App() {
  const { user, loading } = useAuth();
  const [currentPage, setCurrentPage] = useState("dashboard");

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard />;
      case "shares":
        return <SharesPage />;
      default:
        return <Dashboard />;
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <DataProvider>
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <Routes>
          {!user ? (
            <>
              <Route path="/login" element={<LoginPage />} />
              <Route path="*" element={<Navigate to="/login" replace />} />
            </>
          ) : (
            <>
              {/* Routes admin */}
              <Route path="/" element={<DashboardLayout />}>
                <Route index element={<Navigate to="/admin" replace />} />
                <Route path="/admin" element={<DashboardAdmin />} />
                <Route
                  path="/gestion/actionnaires"
                  element={<Shareholders />}
                />
                <Route path="/emission-actions" element={<ShareIssuance />} />
              </Route>

              {/* Routes actionnaire */}
              <Route
                path="/actionnaire"
                element={
                  <MainLayout
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                  >
                    {renderPage()}
                  </MainLayout>
                }
              />

              {/* <Route
                path="/login"
                element={<Navigate to="/dashboard" replace />}
              />
              <Route
                path="admin"
                element={<Navigate to="/dashboard" replace />}
              /> */}
            </>
          )}
        </Routes>
      </Box>
    </DataProvider>
  );
}
