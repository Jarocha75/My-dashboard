import { Box, Card, Stack, Typography, useTheme } from "@mui/material";
import ActiveUsersChart from "../common/ActiveUsersChart";
import { Rocket, ShoppingCart, WalletMinimal, Wrench } from "lucide-react";
import StatProgress from "../common/StatProgress";
import { formatNumberShort } from "@/utils/formatNumber";

const users = 1245;
const clicks = 2_420_430;
const sales = 2400;
const items = 320;

const ActiveUsersCard = () => {
  const theme = useTheme();

  const titleStyle = {
    fontSize: 18,
    fontWeight: 700,
    color: theme.palette.text.primary,
  };

  const subtitleStyle = {
    fontSize: 12,
    mt: 0.5,
    color: "#38E68F",
    fontWeight: 500,
  };

  const labelStyle = {
    fontSize: 14,
    color: theme.palette.text.secondary,
    fontWeight: 500,
  };

  const valueStyle = {
    fontSize: 16,
    color: theme.palette.text.primary,
    fontWeight: 700,
  };

  return (
    <Card
      sx={{
        borderRadius: "28px",
        minHeight: 450,
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
        }}
      />

      <Box sx={{ position: "relative", zIndex: 2, height: "100%" }}>
        <ActiveUsersChart />
      </Box>

      <Stack
        sx={{ position: "relative", zIndex: 2 }}
        direction="column"
        spacing={4}
        mt={2}
      >
        <Stack spacing={0.5}>
          <Typography sx={titleStyle}>Active Users</Typography>
          <Typography sx={subtitleStyle}>+23% than last week</Typography>
        </Stack>

        <Stack direction={"row"} spacing={4} justifyContent="space-between">
          <Stack justifyContent="flex-start" spacing={1}>
            <Stack direction={"row"} spacing={1} alignItems="center">
              <WalletMinimal size={25} color={theme.palette.text.primary} />
              <Typography sx={labelStyle}>Users</Typography>
            </Stack>

            <Stack spacing={1} alignItems="flex-start">
              <Typography sx={valueStyle}>
                {formatNumberShort(users)}
              </Typography>
              <StatProgress value={users} max={2000} />
            </Stack>
          </Stack>

          <Stack spacing={1}>
            <Stack direction={"row"} spacing={1}>
              <Rocket size={25} color={theme.palette.text.primary} />
              <Typography sx={labelStyle}>Clicks</Typography>
            </Stack>

            <Stack spacing={1} alignItems="flex-start">
              <Typography sx={{ ...valueStyle, fontSize: 18 }}>
                {formatNumberShort(clicks)}
              </Typography>
              <StatProgress value={clicks} max={5000000} />
            </Stack>
          </Stack>

          <Stack spacing={1}>
            <Stack direction={"row"} spacing={1}>
              <ShoppingCart size={25} color={theme.palette.text.primary} />
              <Typography sx={labelStyle}>Sales</Typography>
            </Stack>

            <Stack spacing={1} alignItems="flex-start">
              <Typography sx={{ ...valueStyle, fontSize: 18 }}>
                {formatNumberShort(sales)}
              </Typography>
              <StatProgress value={sales} max={5000} />
            </Stack>
          </Stack>

          <Stack spacing={1}>
            <Stack direction={"row"} spacing={1}>
              <Wrench size={25} color={theme.palette.text.primary} />
              <Typography sx={labelStyle}>Items</Typography>
            </Stack>

            <Stack spacing={1} alignItems="flex-start">
              <Typography sx={{ ...valueStyle, fontSize: 18 }}>
                {items.toLocaleString()}
              </Typography>
              <StatProgress value={items} max={1000} />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ActiveUsersCard;
