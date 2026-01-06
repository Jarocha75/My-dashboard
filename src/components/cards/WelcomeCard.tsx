import { Box, Card, Typography, useTheme } from "@mui/material";
import welcomeImg from "@/assets/image/picture01.jpg";
import {
  borderRadius,
  containerStyles,
  heights,
  hoverEffects,
  mergeSx,
} from "@/styles/commonStyles";

const WelcomeCard = () => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: borderRadius.xLarge,
        height: heights.mediumCard.lg,
        background: "transparent",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          left: "0",
          width: "120%",
          height: "120%",
          backgroundImage: `url(${welcomeImg})`,
          backgroundSize: "160%",
          backgroundPosition: "center",
          transform: "scaleX(-1)",
          filter: "brightness(1.4) contrast(1.1) saturate(1.1)",
          zIndex: 1,
        }}
      />

      <Box sx={containerStyles.overlay(theme)} />

      <Box
        sx={{
          position: "relative",
          zIndex: 3,
          color: "white",
          height: "100%",
          p: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <Typography
          sx={{ fontSize: 14, fontWeight: 400, mb: 1, color: "#A0AEC0" }}
        >
          Welcome back
        </Typography>

        <Typography sx={{ fontSize: 26, fontWeight: 700, color: "white" }}>
          Mark Johnson
        </Typography>

        <Typography
          sx={{ fontSize: 16, fontWeight: 400, mt: 3, color: "#A0AEC0" }}
        >
          Glad to see you again!
          <br /> Ask me anything.
        </Typography>
        <Box
          sx={mergeSx(containerStyles.flexCenter(), {
            justifyContent: "flex-start",
            gap: 1,
            mt: 10,
            cursor: "pointer",
          }, hoverEffects.opacity())}
        >
          <Typography sx={{ fontSize: 12, fontWeight: 400, color: "#fff" }}>
            Tap to record
          </Typography>

          <Box
            sx={mergeSx(containerStyles.flexCenter(), {
              width: 18,
              height: 18,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.15)",
            })}
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default WelcomeCard;
