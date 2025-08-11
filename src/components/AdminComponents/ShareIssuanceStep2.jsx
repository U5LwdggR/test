import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useData } from "../../contexts/DataContext";

const ShareIssuanceStep2 = ({ formData, onNext, onBack }) => {
  const { shareholders } = useData();

  const selectedShareholder = shareholders.find(
    (s) => s.id === formData.shareholder
  );

  const handleConfirm = () => {
    // Ici vous pourriez sauvegarder les données
    onNext();
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Confirmation de l'Émission
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        Vérifiez les détails avant de procéder à l'émission
      </Typography>

      <Card variant="outlined" sx={{ mb: 4 }}>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h6" color="primary" gutterBottom>
            Résumé de l'Émission
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" color="text.secondary">
                Actionnaire
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <Typography variant="body1" fontWeight={500}>
                  {selectedShareholder?.name}
                </Typography>
                <Chip
                  label={selectedShareholder?.type}
                  size="small"
                  sx={{ ml: 2 }}
                  variant="outlined"
                />
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="body2" color="text.secondary">
                Actions actuelles
              </Typography>
              <Typography variant="body1" fontWeight={500} sx={{ mt: 1 }}>
                {selectedShareholder?.shares?.toLocaleString()} actions
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="body2" color="text.secondary">
                Nouvelles actions
              </Typography>
              <Typography
                variant="body1"
                fontWeight={500}
                color="success.main"
                sx={{ mt: 1 }}
              >
                +{parseInt(formData.shares).toLocaleString()} actions
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="body2" color="text.secondary">
                Total après émission
              </Typography>
              <Typography variant="body1" fontWeight={500} sx={{ mt: 1 }}>
                {(
                  (selectedShareholder?.shares || 0) + parseInt(formData.shares)
                ).toLocaleString()}{" "}
                actions
              </Typography>
            </Grid>
          </Grid>

          <Divider sx={{ my: 3 }} />

          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Typography variant="body2" color="text.secondary">
                Prix par action
              </Typography>
              <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                €{parseFloat(formData.pricePerShare).toFixed(2)}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Typography variant="body2" color="text.secondary">
                Montant total
              </Typography>
              <Typography variant="h6" color="secondary" sx={{ mt: 1 }}>
                €{parseFloat(formData.totalAmount).toLocaleString()}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Typography variant="body2" color="text.secondary">
                Date d'émission
              </Typography>
              <Typography variant="body1" fontWeight={500} sx={{ mt: 1 }}>
                {new Date(formData.issuanceDate).toLocaleDateString("fr-FR")}
              </Typography>
            </Grid>
          </Grid>

          {formData.notes && (
            <>
              <Divider sx={{ my: 3 }} />
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Notes
              </Typography>
              <Typography variant="body2">{formData.notes}</Typography>
            </>
          )}
        </CardContent>
      </Card>

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
        <Button onClick={onBack} size="large" sx={{ px: 4 }}>
          Retour
        </Button>
        <Button
          onClick={handleConfirm}
          variant="contained"
          size="large"
          sx={{
            background: "linear-gradient(45deg, #4CAF50 30%, #66BB6A 90%)",
            px: 4,
          }}
        >
          Confirmer l'Émission
        </Button>
      </Box>
    </Box>
  );
};

export default ShareIssuanceStep2;
