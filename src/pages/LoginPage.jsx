import {
  AdminPanelSettings,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  Fade,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await login(formData.email, formData.password);
      if (!result.success) {
        setError(result.error);
      }
    } catch (err) {
      setError("Une erreur est survenue lors de la connexion");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1976D2 0%, #42A5F5 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Container maxWidth="sm">
        <Fade in timeout={1000}>
          <Paper
            elevation={24}
            sx={{
              p: 4,
              borderRadius: 3,
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(10px)",
            }}
          >
            <Box textAlign="center" mb={4}>
              <Box
                sx={{
                  display: "inline-flex",
                  p: 2,
                  borderRadius: "50%",
                  backgroundColor: "primary.main",
                  color: "white",
                  mb: 2,
                }}
              >
                <AdminPanelSettings sx={{ fontSize: 40 }} />
              </Box>
              <Typography variant="h4" fontWeight={600} gutterBottom>
                Administration
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Connectez-vous pour accéder au panneau d'administration
              </Typography>
            </Box>

            {error && (
              <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
                {error}
              </Alert>
            )}

            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ display: "flex", flexDirection: "column", gap: 3 }}
            >
              <TextField
                fullWidth
                label="Adresse e-mail"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={loading}
                placeholder="admin@company.com"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                  },
                }}
              />

              <TextField
                fullWidth
                label="Mot de passe"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                required
                disabled={loading}
                placeholder="••••••••"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="basculer la visibilité du mot de passe"
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                        disabled={loading}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                  },
                }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                disabled={loading}
                sx={{
                  py: 1.5,
                  borderRadius: 2,
                  fontSize: "1rem",
                  fontWeight: 600,
                  background:
                    "linear-gradient(45deg, #1976D2 30%, #42A5F5 90%)",
                  boxShadow: "0 3px 12px rgba(25, 118, 210, 0.3)",
                  "&:hover": {
                    boxShadow: "0 6px 20px rgba(25, 118, 210, 0.4)",
                    transform: "translateY(-1px)",
                  },
                }}
              >
                {loading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Se connecter"
                )}
              </Button>
            </Box>

            <Box textAlign="center" mt={4}>
              <Typography variant="body2" color="text.secondary">
                Compte de démonstration admin: admin@company.com / admin123
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Compte de démonstration actionnaire: actionnaire@company.com /
                actionnaire123
              </Typography>
            </Box>
          </Paper>
        </Fade>
      </Container>
    </Box>
  );
};

export default LoginPage;
