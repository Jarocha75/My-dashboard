import { Box, Card, Typography, useTheme } from "@mui/material";
import ArcProgress from "./ArcProgress";
import SmileIcon from "./SmileIcon";

const SatisfactionRateCard = () => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        borderRadius: "28px",
        height: 340,
        background: theme.palette.card.gradient,
        position: "relative",
        overflow: "hidden",
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

      <Box sx={{ position: "relative", zIndex: 2, flexGrow: 1 }}>
        <Typography sx={{ fontSize: 16, fontWeight: 700, color: "white" }}>
          Satisfaction Rate
        </Typography>
        <Typography sx={{ fontSize: 12, color: "#A0AEC0", mt: 0.5 }}>
          From all projects
        </Typography>

        <Box
          sx={{
            mt: 4,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={{ position: "relative" }}>
            <ArcProgress value={95} />

            <Box
              sx={{
                position: "absolute",
                top: "60%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 10,
              }}
            >
              <SmileIcon />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            background: theme.palette.card.gradient,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "20px",
            py: 1.2,
            px: 2,
            mt: 5,
            mx: "auto",
            width: "90%",
          }}
        >
          <Typography sx={{ fontSize: 12, color: "#A0AEC0" }}>0%</Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: 26, fontWeight: 700, color: "white" }}>
              95%
            </Typography>
            <Typography sx={{ fontSize: 12, color: "#A0AEC0" }}>
              Based on likes
            </Typography>
          </Box>

          <Typography sx={{ fontSize: 12, color: "#A0AEC0" }}>100%</Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default SatisfactionRateCard;
