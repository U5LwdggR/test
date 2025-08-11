import {
  Box,
  Card,
  CardContent,
  Container,
  Fade,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ShareIssuanceStep1 from "../../components/AdminComponents/ShareIssuanceStep1";
import ShareIssuanceStep2 from "../../components/AdminComponents/ShareIssuanceStep2";
import ShareIssuanceStep3 from "../../components/AdminComponents/ShareIssuanceStep3";

const steps = ["Détails de l'émission", "Confirmation", "Certificat"];

const ShareIssuance = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    shareholder: "",
    shares: "",
    pricePerShare: "",
    totalAmount: "",
    issuanceDate: new Date().toISOString().split("T")[0],
    notes: "",
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setFormData({
      shareholder: "",
      shares: "",
      pricePerShare: "",
      totalAmount: "",
      issuanceDate: new Date().toISOString().split("T")[0],
      notes: "",
    });
  };

  const updateFormData = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <ShareIssuanceStep1
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNext}
          />
        );
      case 1:
        return (
          <ShareIssuanceStep2
            formData={formData}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 2:
        return <ShareIssuanceStep3 formData={formData} onReset={handleReset} />;
      default:
        return "Étape inconnue";
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Fade in timeout={800}>
        <Box>
          <Typography variant="h4" fontWeight={600} gutterBottom>
            Émission d'Actions
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Processus guidé pour l'émission de nouvelles actions
          </Typography>

          <Card sx={{ mb: 4 }}>
            <CardContent sx={{ p: 4 }}>
              <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>

              <Box sx={{ minHeight: 400 }}>{getStepContent(activeStep)}</Box>
            </CardContent>
          </Card>
        </Box>
      </Fade>
    </Container>
  );
};

export default ShareIssuance;
