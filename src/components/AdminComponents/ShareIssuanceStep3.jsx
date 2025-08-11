import {
  CheckCircle as CheckCircleIcon,
  Download as DownloadIcon,
  Refresh as RefreshIcon,
} from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import jsPDF from "jspdf";
import { useData } from "../../contexts/DataContext";

const ShareIssuanceStep3 = ({ formData, onReset }) => {
  const { shareholders } = useData();

  const selectedShareholder = shareholders.find(
    (s) => s.id === formData.shareholder
  );

  const generateCertificate = () => {
    const doc = new jsPDF();

    // En-tête
    doc.setFontSize(20);
    doc.text("CERTIFICAT D'ACTIONS", 105, 30, { align: "center" });

    // Informations
    doc.setFontSize(12);
    doc.text("Actionnaire:", 20, 60);
    doc.text(selectedShareholder?.name || "", 80, 60);

    doc.text("Nombre d'actions émises:", 20, 80);
    doc.text(formData.shares.toString(), 80, 80);

    doc.text("Prix par action:", 20, 100);
    doc.text(`€${formData.pricePerShare}`, 80, 100);

    doc.text("Montant total:", 20, 120);
    doc.text(`€${formData.totalAmount}`, 80, 120);

    doc.text("Date d'émission:", 20, 140);
    doc.text(
      new Date(formData.issuanceDate).toLocaleDateString("fr-FR"),
      80,
      140
    );

    // Signature
    doc.text("Signature autorisée:", 20, 200);
    doc.text("_____________________", 20, 220);

    // Télécharger
    doc.save(
      `certificat-actions-${selectedShareholder?.name?.replace(
        /\s+/g,
        "-"
      )}.pdf`
    );
  };

  return (
    <Box sx={{ textAlign: "center" }}>
      <Box sx={{ mb: 4 }}>
        <CheckCircleIcon
          sx={{
            fontSize: 80,
            color: "success.main",
            mb: 2,
          }}
        />
        <Typography variant="h5" fontWeight={600} gutterBottom>
          Émission Réussie !
        </Typography>
        <Typography variant="body1" color="text.secondary">
          L'émission d'actions a été traitée avec succès
        </Typography>
      </Box>

      <Alert
        severity="success"
        sx={{ mb: 4, textAlign: "left" }}
        icon={<CheckCircleIcon />}
      >
        <Typography variant="body2" fontWeight={500}>
          Actions émises avec succès
        </Typography>
        <Typography variant="body2">
          {formData.shares} actions ont été émises à {selectedShareholder?.name}
          pour un montant total de €
          {parseFloat(formData.totalAmount).toLocaleString()}
        </Typography>
      </Alert>

      <Card variant="outlined" sx={{ mb: 4 }}>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Prochaines étapes
          </Typography>
          <Box sx={{ textAlign: "left" }}>
            <Typography variant="body2" sx={{ mb: 2 }}>
              • Téléchargez le certificat d'actions ci-dessous
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              • Envoyez le certificat à l'actionnaire
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              • Mettez à jour les registres officiels
            </Typography>
            <Typography variant="body2">
              • Archivez une copie du certificat
            </Typography>
          </Box>
        </CardContent>
      </Card>

      <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
        <Button
          variant="contained"
          startIcon={<DownloadIcon />}
          onClick={generateCertificate}
          size="large"
          sx={{
            background: "linear-gradient(45deg, #1976D2 30%, #42A5F5 90%)",
            px: 4,
          }}
        >
          Télécharger le Certificat
        </Button>
        <Button
          variant="outlined"
          startIcon={<RefreshIcon />}
          onClick={onReset}
          size="large"
          sx={{ px: 4 }}
        >
          Nouvelle Émission
        </Button>
      </Box>
    </Box>
  );
};

export default ShareIssuanceStep3;
