import {
  AccountBalance as AccountBalanceIcon,
  Description as DocumentIcon,
  AttachMoney as MoneyIcon,
  TrendingUp as TrendingUpIcon,
} from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import StatCard from "../../components/StatCard";
import { formatCurrency, shareholderData } from "../../model/shareholderData";

const Dashboard = () => {
  const { personal, totalShares, totalValue, sharePrice, issuances } =
    shareholderData;

  const averagePurchasePrice =
    issuances.reduce(
      (acc, issuance) => acc + issuance.prixUnitaire * issuance.nombreActions,
      0
    ) / totalShares;

  const gainLoss = totalValue - averagePurchasePrice * totalShares;
  const gainLossPercent =
    (gainLoss / (averagePurchasePrice * totalShares)) * 100;

  const stats = [
    {
      title: "Total Actions Détenues",
      value: totalShares.toLocaleString("fr-FR"),
      subtitle: "Actions ordinaires",
      icon: <TrendingUpIcon />,
      color: "primary",
    },
    {
      title: "Valeur Actuelle",
      value: formatCurrency(totalValue),
      subtitle: `Prix actuel: ${formatCurrency(sharePrice)}`,
      icon: <MoneyIcon />,
      color: "success",
      trend: {
        positive: gainLoss >= 0,
        value: `${gainLoss >= 0 ? "+" : ""}${formatCurrency(
          gainLoss
        )} (${gainLossPercent.toFixed(1)}%)`,
      },
    },
    {
      title: "Prix Moyen d'Achat",
      value: formatCurrency(averagePurchasePrice),
      subtitle: "Coût moyen pondéré",
      icon: <AccountBalanceIcon />,
      color: "info",
    },
    {
      title: "Certificats Émis",
      value: issuances.length.toString(),
      subtitle: "Documents disponibles",
      icon: <DocumentIcon />,
      color: "secondary",
    },
  ];

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
          Tableau de Bord
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Bienvenue dans votre espace actionnaire, {personal.prenom}
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* Statistiques */}
        <Grid item xs={12}>
          <Grid container spacing={3}>
            {stats.map((stat, index) => (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <StatCard {...stat} />
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Répartition des actions */}
        <Grid item xs={12} md={12}>
          <Card
            elevation={0}
            sx={{
              border: "1px solid #e0e0e0",
              borderRadius: 3,
              height: "100%",
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
                Répartition des Actions
              </Typography>

              {issuances.map((issuance, index) => {
                const percentage = (issuance.nombreActions / totalShares) * 100;

                return (
                  <Box key={issuance.id} sx={{ mb: 3 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 1,
                      }}
                    >
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {issuance.typeCertificat}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {percentage.toFixed(1)}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={percentage}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: "grey.200",
                        "& .MuiLinearProgress-bar": {
                          borderRadius: 4,
                          backgroundColor:
                            index === 0
                              ? "primary.main"
                              : index === 1
                              ? "secondary.main"
                              : "info.main",
                        },
                      }}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mt: 1,
                      }}
                    >
                      <Typography variant="caption" color="text.secondary">
                        {issuance.nombreActions.toLocaleString("fr-FR")} actions
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {formatCurrency(issuance.valeurTotale)}
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
