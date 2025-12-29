import { Box, Card, Grid, Stack, Typography, useTheme } from "@mui/material";
import ArcProgress from "../common/ArcProgress";
import iconBattery from "@/assets/icons/iconBattery.svg";
import MiniCard from "./MiniCard";
import IconBattery01 from "@/assets/icons/IconBattery01.png";
import IconCar from "@/assets/icons/IconCar.png";
import LineChart01 from "@/assets/charts/LineChart01.png";
import LineChart02 from "@/assets/charts/LineChart02.png";

const score = 6.8;
const scorePercent = Math.round(score * 10);
const restTime = "0h58min";

const CarInfoCard = () => {
  const theme = useTheme();

  const titleStyle = {
    fontSize: 18,
    fontWeight: 700,
    color: theme.palette.text.primary,
    mb: 1,
  };

  const subtitleStyle = {
    fontSize: 12,
    fontWeight: 400,
    color: theme.palette.text.secondary,
  };

  const valueStyle = {
    fontSize: 36,
    fontWeight: 700,
    color: theme.palette.text.primary,
    lineHeight: 1.1,
  };

  return (
    <Card
      sx={{
        position: "relative",
        borderRadius: "28px",
        height: { xs: "auto", md: 377 },
        background: theme.palette.card.overlay,
        backdropFilter: "blur(120px)",
        p: 3,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Stack
        flex={{ xs: 0, md: 1 }}
        width={{ xs: "100%", md: "50%" }}
        spacing={2}
        sx={{
          justifyContent: "space-between",
          height: "100%",
          alignItems: { xs: "center", md: "flex-start" },
        }}
      >
        <Stack
          spacing={0.5}
          sx={{ width: "100%", alignItems: { xs: "center", md: "flex-start" } }}
        >
          <Typography
            fontSize="18px"
            fontWeight={700}
            color={theme.palette.text.primary}
          >
            Car Information
          </Typography>
          <Typography
            fontSize="14px"
            fontWeight={400}
            color={theme.palette.text.primary}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            Hello, Mark Johnson! Your Car is ready.
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
              width: { xs: 160, md: 200 },
              height: { xs: 160, md: 200 },
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

            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
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
              width: { xs: 160, md: 200 },
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
          mt: { xs: 3, md: 0 },
        }}
      >
        <Grid
          container
          spacing={1.5}
          sx={{
            width: { xs: "100%", md: 452 },
            maxWidth: "100%",
          }}
        >
          <Grid size={{ xs: 12, sm: 6 }}>
            <MiniCard
              title="Battery Health"
              value="76%"
              icon={
                <img
                  src={IconCar}
                  alt="Car"
                  style={{ width: 48, height: 48 }}
                />
              }
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <MiniCard
              title="Efficiency"
              value="+20%"
              icon={
                <img
                  src={LineChart01}
                  alt="Chart"
                  style={{ width: 48, height: 48 }}
                />
              }
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <MiniCard
              title="Consumption"
              value="163W/km"
              icon={
                <img
                  src={IconBattery01}
                  alt="Battery"
                  style={{ width: 48, height: 48 }}
                />
              }
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <MiniCard
              title="This week"
              value="1.342km"
              icon={
                <img
                  src={LineChart02}
                  alt="Chart"
                  style={{ width: 48, height: 48 }}
                />
              }
            />
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default CarInfoCard;
