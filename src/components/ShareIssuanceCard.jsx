import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  Button, 
  Chip,
  Divider 
} from '@mui/material';
import { Download as DownloadIcon, Description as DocumentIcon } from '@mui/icons-material';
import { formatCurrency, formatDate } from '../model/shareholderData';

const ShareIssuanceCard = ({ issuance, onDownload }) => {
  const handleDownload = () => {
    // Simulation du téléchargement
    onDownload(issuance);
  };

  return (
    <Card 
      elevation={0}
      sx={{ 
        border: '1px solid #e0e0e0',
        borderRadius: 3,
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-1px)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
        }
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <DocumentIcon sx={{ color: 'primary.main', mr: 1 }} />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {issuance.typeCertificat}
            </Typography>
          </Box>
          <Chip 
            label={issuance.statut}
            color="success"
            size="small"
            sx={{ fontWeight: 500 }}
          />
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Certificat N° {issuance.numeroCertificat}
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body2" color="text.secondary">
              Date d'émission
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              {formatDate(issuance.date)}
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body2" color="text.secondary">
              Nombre d'actions
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 600, color: 'primary.main' }}>
              {issuance.nombreActions.toLocaleString('fr-FR')}
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body2" color="text.secondary">
              Prix unitaire
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              {formatCurrency(issuance.prixUnitaire)}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
              Valeur totale
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 700, color: 'success.main' }}>
              {formatCurrency(issuance.valeurTotale)}
            </Typography>
          </Box>
          
          <Button
            variant="outlined"
            startIcon={<DownloadIcon />}
            onClick={handleDownload}
            sx={{
              borderRadius: 2,
              textTransform: 'none',
              fontWeight: 500,
              px: 3
            }}
          >
            Télécharger PDF
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ShareIssuanceCard;