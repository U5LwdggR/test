import { Add as AddIcon } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Dialog,
  Fade,
  Typography,
} from "@mui/material";
import { useState } from "react";
import AddShareholderForm from "../../components/AdminComponents/AddShareholderForm";
import ShareholdersTable from "../../components/AdminComponents/ShareholdersTable";

const Shareholders = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Fade in timeout={800}>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 4,
            }}
          >
            <Box>
              <Typography variant="h4" fontWeight={600} gutterBottom>
                Gestion des Actionnaires
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Gérez la liste complète des actionnaires et leurs participations
              </Typography>
            </Box>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={handleOpenDialog}
              size="large"
              sx={{
                borderRadius: 2,
                px: 3,
                background: "linear-gradient(45deg, #1976D2 30%, #42A5F5 90%)",
                "&:hover": {
                  transform: "translateY(-1px)",
                  boxShadow: "0 6px 20px rgba(25, 118, 210, 0.4)",
                },
              }}
            >
              Ajouter un Actionnaire
            </Button>
          </Box>

          <ShareholdersTable showActions />

          <Dialog
            open={openDialog}
            onClose={handleCloseDialog}
            maxWidth="sm"
            fullWidth
          >
            <AddShareholderForm onClose={handleCloseDialog} />
          </Dialog>
        </Box>
      </Fade>
    </Container>
  );
};

export default Shareholders;
