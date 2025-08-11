import {
  Box,
  Button,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useData } from "../../contexts/DataContext";

const ShareIssuanceStep1 = ({ formData, updateFormData, onNext }) => {
  const { shareholders } = useData();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });

    // Calculer automatiquement le montant total
    if (name === "shares" || name === "pricePerShare") {
      const shares =
        name === "shares"
          ? parseInt(value) || 0
          : parseInt(formData.shares) || 0;
      const price =
        name === "pricePerShare"
          ? parseFloat(value) || 0
          : parseFloat(formData.pricePerShare) || 0;
      updateFormData({ totalAmount: (shares * price).toString() });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  const isValid =
    formData.shareholder && formData.shares && formData.pricePerShare;

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h6" gutterBottom>
        Détails de l'Émission d'Actions
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        Renseignez les informations pour l'émission de nouvelles actions
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth required>
            <InputLabel>Actionnaire</InputLabel>
            <Select
              name="shareholder"
              value={formData.shareholder}
              onChange={handleChange}
              label="Actionnaire"
            >
              {shareholders.map((shareholder) => (
                <MenuItem key={shareholder.id} value={shareholder.id}>
                  {shareholder.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6}>
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

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Prix par action"
            name="pricePerShare"
            type="number"
            value={formData.pricePerShare}
            onChange={handleChange}
            required
            inputProps={{ min: 0, step: 0.01 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">€</InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Montant total"
            name="totalAmount"
            value={formData.totalAmount}
            InputProps={{
              readOnly: true,
              startAdornment: (
                <InputAdornment position="start">€</InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Date d'émission"
            name="issuanceDate"
            type="date"
            value={formData.issuanceDate}
            onChange={handleChange}
            required
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Notes (optionnel)"
            name="notes"
            multiline
            rows={3}
            value={formData.notes}
            onChange={handleChange}
            placeholder="Notes supplémentaires concernant cette émission..."
          />
        </Grid>
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
        <Button
          type="submit"
          variant="contained"
          disabled={!isValid}
          size="large"
          sx={{
            background: "linear-gradient(45deg, #1976D2 30%, #42A5F5 90%)",
            px: 4,
          }}
        >
          Suivant
        </Button>
      </Box>
    </Box>
  );
};

export default ShareIssuanceStep1;
