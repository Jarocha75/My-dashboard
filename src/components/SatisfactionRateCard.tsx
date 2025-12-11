import { Box, Card, Typography, useTheme } from "@mui/material";
import ArcProgress from "./common/ArcProgress";
import { Smile } from "lucide-react";

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

      <Box sx={{ position: "relative", zIndex: 2 }}>
        <Typography sx={{ fontSize: 16, fontWeight: 700, color: "white" }}>
          Satisfaction Rate
        </Typography>
        <Typography sx={{ fontSize: 12, color: "#A0AEC0", mt: 0.5 }}>
          From all projects
        </Typography>
      </Box>

      <Box
        sx={{
          mt: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          position: "relative",
          zIndex: 2,
        }}
      >
        <Box sx={{ position: "relative" }}>
          <ArcProgress
            value={95}
            size={180}
            thickness={10}
            startAngle={270}
            endAngle={450}
            clip="top"
            gradientId="satisfactionGradient"
            gradientStart="#3A7BFF"
            gradientEnd="#00E1FF"
          />

          <Box
            sx={{
              position: "absolute",
              top: "70%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 10,
            }}
          >
            <Smile size={40} />
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
            <Typography color="white" fontSize={26} fontWeight={700}>
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
