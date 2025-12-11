import { Box, Card, Typography, useTheme, IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArcProgress from "./common/ArcProgress";

const ReferralTrackingCard = () => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        position: "relative",
        borderRadius: "28px",
        height: 344,
        background: theme.palette.card.gradient,
        backdropFilter: "blur(120px)", // Presne ako vo Figme
        p: 3,
        display: "flex",
        flexDirection: "row",
        overflow: "hidden",
      }}
    >
      {/* MENU DOTS */}
      <IconButton
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          color: "#A0AEC0",
          zIndex: 10,
        }}
      >
        <MoreHorizIcon />
      </IconButton>

      {/* LEFT SIDE */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          gap: 3,
          pr: 2,
        }}
      >
        <Typography
          sx={{ fontSize: 18, fontWeight: 700, color: "white", mb: 1 }}
        >
          Referral Tracking
        </Typography>

        {/* Card 1 */}
        <Box
          sx={{
            p: 2,
            borderRadius: "18px",
            background: theme.palette.card.glass,
            backdropFilter: "blur(12px)",
          }}
        >
          <Typography sx={{ color: "#A0AEC0", fontSize: 12 }}>
            Invited
          </Typography>
          <Typography sx={{ fontSize: 22, fontWeight: 700, color: "white" }}>
            145 people
          </Typography>
        </Box>

        {/* Card 2 */}
        <Box
          sx={{
            p: 2,
            borderRadius: "18px",
            background: theme.palette.card.glass,
            backdropFilter: "blur(12px)",
          }}
        >
          <Typography sx={{ color: "#A0AEC0", fontSize: 12 }}>Bonus</Typography>
          <Typography sx={{ fontSize: 22, fontWeight: 700, color: "white" }}>
            1,465
          </Typography>
        </Box>
      </Box>

      {/* RIGHT SIDE — QUARTER GAUGE */}
      <Box
        sx={{
          flex: 1,
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pl: 4,
        }}
      >
        <ArcProgress
          value={93}
          size={220}
          thickness={12}
          startAngle={200}
          endAngle={420} // otvorený dole!
          gradientId="referralGradient"
          gradientStart="#00E1FF"
          gradientEnd="#00FF85"
        />

        {/* Center text */}
        <Box
          sx={{
            position: "absolute",
            textAlign: "center",
            top: "35%",
            transform: "translateY(-20%)",
          }}
        >
          <Typography sx={{ color: "#A0AEC0", fontSize: 14 }}>
            Safety
          </Typography>

          <Typography
            sx={{
              fontSize: 42,
              fontWeight: 700,
              color: "white",
              lineHeight: 1.1,
            }}
          >
            9.3
          </Typography>

          <Typography sx={{ color: "#A0AEC0", fontSize: 14 }}>
            Total Score
          </Typography>
        </Box>
      </Box>

      {/* gradient */}
      <svg width="0" height="0">
        <defs>
          <linearGradient
            id="referralGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#00E1FF" />
            <stop offset="100%" stopColor="#00FF85" />
          </linearGradient>
        </defs>
      </svg>
    </Card>
  );
};

export default ReferralTrackingCard;
