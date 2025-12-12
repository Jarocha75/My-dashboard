import { Card, Typography, useTheme, Box } from "@mui/material";
import SalesOverviewChart from "./common/SalesOverviewChart";

const SalesOverviewCard = () => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        borderRadius: "28px",
        minHeight: 450,
        background: theme.palette.card.gradient,
        position: "relative",
        p: 3,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: theme.palette.card.gradientOverlay,
          zIndex: 1,
        }}
      />

      <Box sx={{ position: "relative", zIndex: 2 }}>
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
      </Box>
    </Card>
  );
};

export default SalesOverviewCard;
