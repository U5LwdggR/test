// Modèle de données pour les actionnaires
export const shareholderData = {
  personal: {
    id: 'SH001',
    nom: 'Martin',
    prenom: 'Jean-Pierre',
    email: 'jean-pierre.martin@email.com',
    telephone: '+33 1 23 45 67 89',
    adresse: '123 Rue de la Paix, 75001 Paris, France',
    dateAdhesion: '2022-03-15',
    numeroActionnaire: 'ACT-2022-001'
  },
  totalShares: 2500,
  totalValue: 125000,
  sharePrice: 50,
  issuances: [
    {
      id: 'ISS001',
      date: '2022-03-15',
      nombreActions: 1000,
      prixUnitaire: 45,
      valeurTotale: 45000,
      typeCertificat: 'Émission Initiale',
      numeroCertificat: 'CERT-2022-001',
      statut: 'Actif'
    },
    {
      id: 'ISS002',
      date: '2023-01-10',
      nombreActions: 800,
      prixUnitaire: 48,
      valeurTotale: 38400,
      typeCertificat: 'Émission Supplémentaire',
      numeroCertificat: 'CERT-2023-002',
      statut: 'Actif'
    },
    {
      id: 'ISS003',
      date: '2024-06-20',
      nombreActions: 700,
      prixUnitaire: 52,
      valeurTotale: 36400,
      typeCertificat: 'Émission de Croissance',
      numeroCertificat: 'CERT-2024-003',
      statut: 'Actif'
    }
  ]
};

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR'
  }).format(amount);
};

export const formatDate = (dateString) => {
  return new Intl.DateTimeFormat('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(dateString));
};