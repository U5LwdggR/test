import {
  AccountCircle as AccountIcon,
  Dashboard as DashboardIcon,
  Description as DocumentIcon,
  Logout as LogoutIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  Dialog,
  DialogContent,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PersonalInfoCard from "../components/PersonalInfoCard";
import { shareholderData } from "../model/shareholderData";

const MainLayout = ({ children, currentPage, onPageChange }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const infosUser = shareholderData.personal;
  const navigate = useNavigate();

  const handleProfileMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleDeconnexion = () => {
    setAnchorEl(null);
    localStorage.removeItem("admin_user");
    navigate("/login");
  };

  const handleOpenModal = () => {
    setAnchorEl(null);
    setIsOpen(true);
  };

  const menuItems = [
    { id: "dashboard", label: "Tableau de bord", icon: <DashboardIcon /> },
    { id: "shares", label: "Mes Actions", icon: <DocumentIcon /> },
  ];

  const DrawerContent = () => (
    <Box sx={{ width: 250 }} onClick={() => setDrawerOpen(false)}>
      <Box sx={{ p: 2, borderBottom: "1px solid #e0e0e0" }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, color: "primary.main" }}
        >
          Espace Actionnaire
        </Typography>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.id}
            selected={currentPage === item.id}
            onClick={() => onPageChange(item.id)}
            sx={{
              "&.Mui-selected": {
                backgroundColor: "primary.light",
                "& .MuiListItemIcon-root": { color: "primary.main" },
                "& .MuiListItemText-primary": {
                  color: "primary.main",
                  fontWeight: 600,
                },
              },
            }}
          >
            <ListItemIcon
              sx={{
                color:
                  currentPage === item.id ? "primary.main" : "text.secondary",
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.label}
              sx={{
                "& .MuiListItemText-primary": {
                  fontWeight: currentPage === item.id ? 600 : 400,
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box sx={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
        <AppBar
          position="sticky"
          elevation={0}
          sx={{
            backgroundColor: "white",
            borderBottom: "1px solid #e0e0e0",
          }}
        >
          <Toolbar>
            {isMobile && (
              <IconButton
                edge="start"
                onClick={() => setDrawerOpen(true)}
                sx={{ mr: 2, color: "primary.main" }}
              >
                <MenuIcon />
              </IconButton>
            )}

            <Typography
              variant="h6"
              sx={{
                flexGrow: 1,
                fontWeight: 600,
                color: "primary.main",
              }}
            >
              Gestion des Actions
            </Typography>

            <IconButton onClick={handleProfileMenu} sx={{ p: 0 }}>
              <Avatar
                sx={{
                  width: 40,
                  height: 40,
                  backgroundColor: "primary.main",
                  fontSize: "1rem",
                }}
              >
                JM
              </Avatar>
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
              PaperProps={{
                elevation: 3,
                sx: { mt: 1.5, minWidth: 180 },
              }}
            >
              <MenuItem onClick={handleOpenModal}>
                <ListItemIcon>
                  <AccountIcon fontSize="small" />
                </ListItemIcon>
                Mon Profil
              </MenuItem>
              <MenuItem
                onClick={handleDeconnexion}
                sx={{ color: "error.main" }}
              >
                <ListItemIcon>
                  <LogoutIcon fontSize="small" sx={{ color: "error.main" }} />
                </ListItemIcon>
                Déconnexion
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>

        <Box sx={{ display: "flex" }}>
          {!isMobile && (
            <Box
              sx={{
                width: 250,
                backgroundColor: "white",
                borderRight: "1px solid #e0e0e0",
                minHeight: "calc(100vh - 64px)",
              }}
            >
              <DrawerContent />
            </Box>
          )}

          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
          >
            <DrawerContent />
          </Drawer>

          <Box
            sx={{
              flexGrow: 1,
              p: { xs: 2, md: 3 },
              maxWidth: "100%",
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogContent>
          <PersonalInfoCard personalInfo={infosUser} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MainLayout;
