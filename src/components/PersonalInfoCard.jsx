import {
  Email as EmailIcon,
  Home as HomeIcon,
  Person as PersonIcon,
  Phone as PhoneIcon,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { formatDate } from "../model/shareholderData";

const PersonalInfoCard = ({ personalInfo }) => {
  const [open, setOpen] = useState(false); // État du modal
  const [formData, setFormData] = useState({
    prenom: personalInfo.prenom,
    nom: personalInfo.nom,
    email: personalInfo.email,
    telephone: personalInfo.telephone,
    adresse: personalInfo.adresse,
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log("Données mises à jour :", formData);
    // 🔹 Ici tu peux appeler ton API pour sauvegarder les modifications
    handleClose();
  };

  const infoItems = [
    { icon: <EmailIcon />, label: "Email", value: personalInfo.email },
    { icon: <PhoneIcon />, label: "Téléphone", value: personalInfo.telephone },
    { icon: <HomeIcon />, label: "Adresse", value: personalInfo.adresse },
  ];

  return (
    <>
      {/* Carte principale */}
      <Card
        elevation={0}
        sx={{
          border: "1px solid #e0e0e0",
          borderRadius: 3,
          height: "100%",
        }}
      >
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
            <Avatar
              sx={{
                width: 64,
                height: 64,
                backgroundColor: "primary.main",
                mr: 3,
                fontSize: "1.5rem",
                fontWeight: 600,
              }}
            >
              {personalInfo.prenom.charAt(0)}
              {personalInfo.nom.charAt(0)}
            </Avatar>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 0.5 }}>
                {personalInfo.prenom} {personalInfo.nom}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Actionnaire N° {personalInfo.numeroActionnaire}
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ mb: 3 }} />

          <Box>
            {infoItems.map((item, index) => (
              <Box
                key={index}
                sx={{ display: "flex", alignItems: "flex-start", mb: 2.5 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 40,
                    height: 40,
                    backgroundColor: "grey.100",
                    borderRadius: 2,
                    mr: 2,
                    flexShrink: 0,
                  }}
                >
                  {React.cloneElement(item.icon, {
                    sx: { color: "primary.main", fontSize: "1.25rem" },
                  })}
                </Box>
                <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ fontWeight: 500 }}
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 500,
                      wordBreak: "break-word",
                    }}
                  >
                    {item.value}
                  </Typography>
                </Box>
              </Box>
            ))}

            <Box sx={{ display: "flex", alignItems: "flex-start" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 40,
                  height: 40,
                  backgroundColor: "grey.100",
                  borderRadius: 2,
                  mr: 2,
                  flexShrink: 0,
                }}
              >
                <PersonIcon
                  sx={{ color: "primary.main", fontSize: "1.25rem" }}
                />
              </Box>
              <Box>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ fontWeight: 500 }}
                >
                  Membre depuis
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {formatDate(personalInfo.dateAdhesion)}
                </Typography>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Boutons */}
      <Box sx={{ display: "flex", marginLeft: "70%", marginTop: "20px" }}>
        <Button color="error" onClick={handleClose}>
          Fermer
        </Button>
        <Button onClick={handleOpen}>Modifier</Button>
      </Box>

      {/* Modal de modification */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" mb={2}>
            Modifier les informations
          </Typography>

          <TextField
            fullWidth
            margin="normal"
            label="Prénom"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Téléphone"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Adresse"
            name="adresse"
            value={formData.adresse}
            onChange={handleChange}
          />

          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
            <Button onClick={handleClose} sx={{ mr: 1 }}>
              Annuler
            </Button>
            <Button variant="contained" onClick={handleSave}>
              Enregistrer
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default PersonalInfoCard;
