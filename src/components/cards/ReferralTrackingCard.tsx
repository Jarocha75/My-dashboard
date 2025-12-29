import { Card, Typography, useTheme, IconButton, Stack } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArcProgress from "../common/ArcProgress";
import { formatNumberShort } from "@/utils/formatNumber";

const peopleInvited = 145;
const bonusAmount = 1465;
const score = 9.3;
const scorePercent = score * 10;

const ReferralTrackingCard = () => {
  const theme = useTheme();

  const titleStyle = {
    fontSize: 18,
    fontWeight: 700,
    color: theme.palette.text.primary,
    mb: 1,
  };

  const subtitleStyle = {
    fontSize: 14,
    color: theme.palette.text.secondary,
  };

  const labelStyle = {
    fontSize: 22,
    color: theme.palette.text.primary,
    fontWeight: 700,
  };

  const valueStyle = {
    fontSize: 42,
    fontWeight: 700,
    color: theme.palette.text.primary,
    lineHeight: 1.1,
  };

  return (
    <Card
      sx={{
        position: "relative",
        borderRadius: "28px",
        minHeight: 340,
        background: theme.palette.card.basic,
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
        <Typography sx={titleStyle}>Referral Tracking</Typography>

        <Stack
          sx={{
            p: 2,
            borderRadius: "18px",
            background: theme.palette.card.chart,
            backdropFilter: "blur(12px)",
          }}
        >
          <Typography sx={subtitleStyle}>Invited</Typography>
          <Typography sx={labelStyle}>
            {formatNumberShort(peopleInvited)} people
          </Typography>
        </Stack>

        <Stack
          sx={{
            p: 2,
            borderRadius: "18px",
            background: theme.palette.card.chart,
            backdropFilter: "blur(12px)",
          }}
        >
          <Typography sx={subtitleStyle}>Bonus</Typography>
          <Typography sx={labelStyle}>
            ${formatNumberShort(bonusAmount)}
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
          value={scorePercent}
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
          <Typography sx={subtitleStyle}>Safety</Typography>

          <Typography sx={valueStyle}>{score}</Typography>

          <Typography sx={subtitleStyle}>Total Score</Typography>
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
