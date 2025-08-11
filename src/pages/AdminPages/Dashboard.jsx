import { Box, Container, Fade, Grid, Typography } from "@mui/material";
import RecentActivity from "../../components/AdminComponents/RecentActivity";
import ShareholdersPieChart from "../../components/AdminComponents/ShareholdersPieChart";
import ShareholdersTable from "../../components/AdminComponents/ShareholdersTable";
import StatsCard from "../../components/AdminComponents/StatsCard";
import { useData } from "../../contexts/DataContext";

const DashboardAdmin = () => {
  const { shareholders, getTotalShares } = useData();

  const totalShares = getTotalShares();
  const totalShareholders = shareholders.length;
  const averageShares = Math.round(totalShares / totalShareholders);

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Fade in timeout={800}>
        <Box>
          <Typography variant="h4" fontWeight={600} gutterBottom>
            Tableau de bord
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Vue d'ensemble de la structure actionnariale
          </Typography>

          <Grid container spacing={3}>
            {/* Cartes de statistiques */}
            <Grid item xs={12} sm={6} md={3}>
              <StatsCard
                title="Total Actionnaires"
                value={totalShareholders}
                icon="people"
                color="primary"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatsCard
                title="Actions Émises"
                value={totalShares.toLocaleString()}
                icon="trending_up"
                color="success"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatsCard
                title="Moyenne par Actionnaire"
                value={averageShares.toLocaleString()}
                icon="analytics"
                color="warning"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatsCard
                title="Valeur Totale"
                value="€2.5M"
                icon="euro"
                color="secondary"
              />
            </Grid>

            {/* Graphique en camembert */}
            <Grid item xs={12} md={6}>
              <ShareholdersPieChart />
            </Grid>

            {/* Activité récente */}
            <Grid item xs={12} md={6}>
              <RecentActivity />
            </Grid>

            {/* Tableau des actionnaires */}
            <Grid item xs={12}>
              <ShareholdersTable />
            </Grid>
          </Grid>
        </Box>
      </Fade>
    </Container>
  );
};

export default DashboardAdmin;
