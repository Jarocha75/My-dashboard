import { Box, Card, Grid, Stack, Typography, useTheme } from "@mui/material";
import ArcProgress from "../common/ArcProgress";
import iconBattery from "@/assets/icons/iconBattery.svg";
import MiniCard from "./MiniCard";

const score = 6.8;
const scorePercent = Math.round(score * 10);
const restTime = "0h58min";

interface MiniCardData {
  title: string;
  value: string;
  icon: string;
}

interface Props {
  title?: string;
  userName?: string;
  actionText?: string;
  miniCards?: MiniCardData[];
}

const CarInfoCard = ({
  title = "Car Information",
  userName = "Mark Johnson",
  actionText = "Your Car is ready",
  miniCards = [],
}: Props) => {
  const theme = useTheme();

  const titleStyle = {
    fontSize: 18,
    fontWeight: 700,
    color: theme.palette.text.primary,
    mb: 1,
    textAlign: "center",
  };

  const subtitleStyle = {
    fontSize: 12,
    fontWeight: 400,
    color: theme.palette.text.secondary,
    textAlign: "center",
  };

  const valueStyle = {
    fontSize: 36,
    fontWeight: 700,
    color: theme.palette.text.primary,
    lineHeight: 1.1,
    textAlign: "center",
  };

  return (
    <Card
      sx={{
        position: "relative",
        borderRadius: "28px",
        height: { xs: "auto", lg: 377 },
        background: theme.palette.card.overlay,
        backdropFilter: "blur(120px)",
        p: 3,
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
      }}
    >
      <Stack
        flex={{ xs: 0, lg: 1 }}
        width={{ xs: "100%", lg: "50%" }}
        spacing={2}
        sx={{
          justifyContent: "space-between",
          height: "100%",
          alignItems: { xs: "center", lg: "flex-start" },
        }}
      >
        <Stack
          spacing={0.5}
          sx={{ width: "100%", alignItems: { xs: "center", lg: "flex-start" } }}
        >
          <Typography
            fontSize="18px"
            fontWeight={700}
            color={theme.palette.text.primary}
          >
            {title}
          </Typography>
          <Typography
            fontSize="14px"
            fontWeight={400}
            color={theme.palette.text.primary}
            sx={{ textAlign: { xs: "center", lg: "left" } }}
          >
            Hello, {userName}! {actionText}.
          </Typography>
        </Stack>

        <Stack
          spacing={1.5}
          sx={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: { xs: 160, lg: 200 },
              height: { xs: 160, lg: 200 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: { xs: 160, lg: 200 },
                height: { xs: 160, lg: 200 },
                position: "absolute",
                top: 0,
                left: 0,
              }}
            >
              <ArcProgress
                value={scorePercent}
                size={{ xs: 160, md: 200 }}
                thickness={12}
                startAngle={220}
                endAngle={480}
                gradientId="referralGradient"
                gradientStart="#00E1FF"
                gradientEnd="#00FF85"
              />
            </Box>

            <Box
              sx={{
                position: "relative",
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 0.5,
              }}
            >
              <Box
                component="img"
                src={iconBattery}
                alt="Battery"
                sx={{
                  width: 14,
                  height: 22,
                }}
              />

              <Typography sx={valueStyle}>{scorePercent}%</Typography>

              <Typography sx={subtitleStyle}>Current load</Typography>
            </Box>

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
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: 160, lg: 200 },
            }}
          >
            <Typography sx={titleStyle}>{restTime}</Typography>
            <Typography sx={subtitleStyle}>Time to full charge</Typography>
          </Box>
        </Stack>
      </Stack>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: { xs: 3, lg: 0 },
        }}
      >
        <Grid
          container
          spacing={1.5}
          sx={{
            width: "100%",
            maxWidth: { xl: 452 },
            justifyContent: { xs: "center", xl: "flex-start" },
          }}
        >
          {miniCards.map((card, index) => (
            <Grid
              key={index}
              size={{ xs: 12, sm: 6, lg: 12, xl: 6 }}
              sx={{
                display: "flex",
                justifyContent: { xs: "center", xl: "flex-start" },
              }}
            >
              <MiniCard
                title={card.title}
                value={card.value}
                icon={
                  <img
                    src={card.icon}
                    alt={card.title}
                    style={{ width: 48, height: 48 }}
                  />
                }
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Card>
  );
};

export default CarInfoCard;
