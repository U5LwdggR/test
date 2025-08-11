import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth doit être utilisé dans AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Vérifier si l'utilisateur est déjà connecté
    const savedUser = localStorage.getItem("admin_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // Simulation d'authentification
    if (email === "admin@company.com" && password === "admin123") {
      const userData = {
        id: "1",
        email: "admin@company.com",
        name: "Administrateur",
        role: "admin",
      };
      setUser(userData);
      localStorage.setItem("admin_user", JSON.stringify(userData));
      navigate("/admin");
      return { success: true };
    } else if (
      email === "actionnaire@company.com" &&
      password === "actionnaire123"
    ) {
      const userData = {
        id: "2",
        email: "actionnaire@company.com",
        name: "Actionnaire",
        role: "Actionnaire",
      };
      setUser(userData);
      localStorage.setItem("admin_user", JSON.stringify(userData));
      navigate("/actionnaire");
    }
    return { success: true, error: "Identifiants invalides" };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("admin_user");
  };

  const value = {
    user,
    login,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
