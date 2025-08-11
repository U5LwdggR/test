import { Box, Card, CardContent, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import { useData } from "../../contexts/DataContext";

const ShareholdersPieChart = () => {
  const { shareholders } = useData();

  const data = shareholders.map((shareholder, index) => ({
    id: shareholder.id,
    value: shareholder.shares,
    label: shareholder.name,
    color: [
      "#1976D2", // Primary
      "#42A5F5", // Primary Light
      "#DC004E", // Secondary
      "#4CAF50", // Success
      "#FF9800", // Warning
      "#9C27B0", // Purple
      "#00BCD4", // Cyan
      "#795548", // Brown
    ][index % 8],
  }));

  return (
    <Card sx={{ height: "100%" }}>
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          Répartition des Actions
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Distribution des parts par actionnaire
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <PieChart
            series={[
              {
                data,
                highlightScope: { faded: "global", highlighted: "item" },
                faded: {
                  innerRadius: 30,
                  additionalRadius: -30,
                  color: "gray",
                },
                innerRadius: 60,
                outerRadius: 120,
                paddingAngle: 2,
                cornerRadius: 4,
              },
            ]}
            width={400}
            height={300}
            margin={{ top: 40, bottom: 40, left: 80, right: 80 }}
            slotProps={{
              legend: {
                direction: "column",
                position: { vertical: "bottom", horizontal: "left" },
                padding: 0,
              },
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default ShareholdersPieChart;
