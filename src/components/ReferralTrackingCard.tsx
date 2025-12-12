import { Card, Typography, useTheme, IconButton, Stack } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArcProgress from "./common/ArcProgress";

const ReferralTrackingCard = () => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        position: "relative",
        borderRadius: "28px",
        minHeight: 340,
        background: theme.palette.card.gradient,
        backdropFilter: "blur(120px)",
        p: 3,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        overflow: "hidden",
        gap: { xs: 3, md: 0 },
      }}
    >
      <IconButton
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          color: theme.palette.text.secondary,
          zIndex: 10,
        }}
      >
        <MoreHorizIcon />
      </IconButton>

      <Stack
        flex={{ xs: 0, md: 1 }}
        width={{ xs: "100%", md: "50%" }}
        justifyContent={"flex-start"}
        gap={3}
        pr={{ md: 2 }}
      >
        <Typography
          sx={{ fontSize: 18, fontWeight: 700, color: "white", mb: 1 }}
        >
          Referral Tracking
        </Typography>

        <Stack
          sx={{
            p: 2,
            borderRadius: "18px",
            background: theme.palette.card.glass,
            backdropFilter: "blur(12px)",
          }}
        >
          <Typography
            sx={{ color: theme.palette.text.secondary, fontSize: 12 }}
          >
            Invited
          </Typography>
          <Typography sx={{ fontSize: 22, fontWeight: 700, color: "white" }}>
            145 people
          </Typography>
        </Stack>

        <Stack
          sx={{
            p: 2,
            borderRadius: "18px",
            background: theme.palette.card.glass,
            backdropFilter: "blur(12px)",
          }}
        >
          <Typography
            sx={{ color: theme.palette.text.secondary, fontSize: 12 }}
          >
            Bonus
          </Typography>
          <Typography sx={{ fontSize: 22, fontWeight: 700, color: "white" }}>
            1,465
          </Typography>
        </Stack>
      </Stack>

      <Stack
        flex={{ xs: 0, md: 1 }}
        width={{ xs: "100%", md: "50%" }}
        justifyContent={"center"}
        alignItems={"center"}
        pt={{ xs: 2, md: 0 }}
        sx={{ position: "relative" }}
      >
        <ArcProgress
          value={93}
          size={{ xs: 160, md: 220 }}
          thickness={12}
          startAngle={200}
          endAngle={420}
          gradientId="referralGradient"
          gradientStart="#00E1FF"
          gradientEnd="#00FF85"
        />

        <Stack
          textAlign={"center"}
          sx={{
            position: "absolute",
            top: "35%",
            transform: "translateY(-20%)",
          }}
        >
          <Typography
            sx={{ color: theme.palette.text.secondary, fontSize: 14 }}
          >
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

          <Typography
            sx={{ color: theme.palette.text.secondary, fontSize: 14 }}
          >
            Total Score
          </Typography>
        </Stack>
      </Stack>

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
