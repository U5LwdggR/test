import { Alert, Box, Grid, Snackbar, Typography } from "@mui/material";
import { useState } from "react";
import ShareIssuanceCard from "../../components/ShareIssuanceCard";
import { formatCurrency, shareholderData } from "../../model/shareholderData";

const SharesPage = () => {
  const [snackbar, setSnackbar] = useState({ open: false, message: "" });
  const { issuances, totalShares, totalValue } = shareholderData;

  const handleDownload = (issuance) => {
    // Simulation du téléchargement du PDF
    setSnackbar({
      open: true,
      message: `Téléchargement du certificat ${issuance.numeroCertificat} en cours...`,
    });

    // Ici vous pourriez ajouter la logique réelle de téléchargement
    console.log("Téléchargement du certificat:", issuance.numeroCertificat);
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: "text.primary",
            mb: 1,
          }}
        >
          Mes Actions
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Consultez et téléchargez vos certificats d'actions
        </Typography>

        <Alert
          severity="info"
          sx={{
            borderRadius: 2,
            "& .MuiAlert-message": { fontWeight: 500 },
          }}
        >
          <strong>Portfolio Total:</strong>{" "}
          {totalShares.toLocaleString("fr-FR")} actions • Valeur:{" "}
          {formatCurrency(totalValue)}
        </Alert>
      </Box>

      <Grid container spacing={3}>
        {issuances.map((issuance) => (
          <Grid item xs={12} md={6} lg={4} key={issuance.id}>
            <ShareIssuanceCard
              issuance={issuance}
              onDownload={handleDownload}
            />
          </Grid>
        ))}
      </Grid>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={snackbar.message}
        sx={{
          "& .MuiSnackbarContent-root": {
            backgroundColor: "primary.main",
            borderRadius: 2,
          },
        }}
      />
    </Box>
  );
};

export default SharesPage;
