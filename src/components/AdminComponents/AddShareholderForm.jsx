import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useData } from "../../contexts/DataContext";

const AddShareholderForm = ({ onClose }) => {
  const { addShareholder } = useData();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    shares: "",
    type: "",
    dateJoined: new Date().toISOString().split("T")[0],
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const shareholderData = {
      ...formData,
      shares: parseInt(formData.shares),
      percentage: 0, // Sera calculé automatiquement
    };

    addShareholder(shareholderData);
    onClose();
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <DialogTitle>
        <Typography variant="h6" fontWeight={600}>
          Ajouter un Nouvel Actionnaire
        </Typography>
      </DialogTitle>

      <DialogContent dividers>
        <Grid container spacing={3} sx={{ mt: 1 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Nom complet"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Adresse e-mail"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Nombre d'actions"
              name="shares"
              type="number"
              value={formData.shares}
              onChange={handleChange}
              required
              inputProps={{ min: 1 }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth required>
              <InputLabel>Type d'actionnaire</InputLabel>
              <Select
                name="type"
                value={formData.type}
                onChange={handleChange}
                label="Type d'actionnaire"
              >
                <MenuItem value="Fondateur">Fondateur</MenuItem>
                <MenuItem value="Investisseur">Investisseur</MenuItem>
                <MenuItem value="Employé">Employé</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Date d'entrée"
              name="dateJoined"
              type="date"
              value={formData.dateJoined}
              onChange={handleChange}
              required
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions sx={{ p: 3 }}>
        <Button onClick={onClose} color="inherit">
          Annuler
        </Button>
        <Button
          type="submit"
          variant="contained"
          sx={{
            background: "linear-gradient(45deg, #1976D2 30%, #42A5F5 90%)",
            px: 3,
          }}
        >
          Ajouter l'Actionnaire
        </Button>
      </DialogActions>
    </Box>
  );
};

export default AddShareholderForm;
