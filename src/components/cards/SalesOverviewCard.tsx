import { Card, Typography, useTheme, Box } from "@mui/material";
import SalesOverviewChart from "../common/SalesOverviewChart";

const SalesOverviewCard = () => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        borderRadius: "28px",
        minHeight: 445,
        background: theme.palette.card.basic,
        backdropFilter: "blur(120px)",
        p: 3,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          fontSize: 18,
          fontWeight: 700,
          color: theme.palette.text.primary,
        }}
      >
        Sales overview
      </Typography>

      <Typography
        sx={{
          fontSize: 12,
          mt: 0.5,
          color: "#38E68F",
          fontWeight: 500,
        }}
      >
        (+5) more in 2021
      </Typography>

      <Box mt={3} minHeight={320}>
        <SalesOverviewChart />
      </Box>
    </Card>
  );
};

export default SalesOverviewCard;
