import { Card, Typography, useTheme, Stack } from "@mui/material";
import SalesOverviewChart from "./common/SalesOverviewChart";

const SalesOverviewCard = () => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        borderRadius: "28px",
        height: 450,
        background: theme.palette.card.gradient,
        position: "relative",
        p: 3,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack
        sx={{
          position: "absolute",
          inset: 0,
          background: theme.palette.card.gradientOverlay,
          zIndex: 1,
        }}
      />

      <Stack sx={{ position: "relative", zIndex: 2 }}>
        <Typography
          sx={{
            fontSize: 18,
            fontWeight: 700,
            color: "#ffffff",
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

        <Stack mt={3} height={320}>
          <SalesOverviewChart />
        </Stack>
      </Stack>
    </Card>
  );
};

export default SalesOverviewCard;
