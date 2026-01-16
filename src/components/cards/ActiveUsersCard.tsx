import { Box, Card, Stack, Typography, useTheme } from "@mui/material";
import ActiveUsersChart from "../common/ActiveUsersChart";
import { Rocket, ShoppingCart, WalletMinimal, Wrench } from "lucide-react";
import StatProgress from "../common/StatProgress";
import { formatNumberShort } from "@/utils/formatNumber";
import {
  cardStyles,
  typographyStyles,
  mergeSx,
} from "@/styles/commonStyles";

const CARD_CONTENT = {
  title: "Active Users",
  subtitle: "+23% than last week",
  stats: {
    users: { value: 1245, max: 2000, label: "Users" },
    clicks: { value: 2_420_430, max: 5_000_000, label: "Clicks" },
    sales: { value: 2400, max: 5000, label: "Sales" },
    items: { value: 320, max: 1000, label: "Items" },
  },
};

const ActiveUsersCard = () => {
  const theme = useTheme();

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
      sx={mergeSx(cardStyles.basicCard(theme), {
        minHeight: 445,
        display: "flex",
        p: { xs: 2, md: 3 },
        flexDirection: "column",
      })}
    >
      <Box
        sx={{
          height: 230,
          background: theme.palette.card.chart,
          borderRadius: "20px",
          mb: 2,
        }}
      >
        <ActiveUsersChart />
      </Box>

      <Stack direction="column" spacing={3} mt={1}>
        <Stack spacing={0.5}>
          <Typography sx={typographyStyles.cardTitle(theme)}>
            {CARD_CONTENT.title}
          </Typography>
          <Typography
            sx={mergeSx(typographyStyles.bodySecondary(theme), {
              mt: 0.5,
              color: "#38E68F",
              fontWeight: 500,
            })}
          >
            {CARD_CONTENT.subtitle}
          </Typography>
        </Stack>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent={"space-between"}
          spacing={{ xs: 2, sm: 4 }}
          flexWrap="wrap"
        >
          <Stack
            justifyContent="flex-start"
            sx={{
              width: { xs: "100%", sm: "auto" },
            }}
          >
            <Stack direction={"row"} spacing={1} alignItems="center">
              <WalletMinimal size={25} color={theme.palette.text.primary} />
              <Typography sx={labelStyle}>{CARD_CONTENT.stats.users.label}</Typography>
            </Stack>

            <Stack spacing={1} alignItems="flex-start">
              <Typography sx={valueStyle}>
                {formatNumberShort(CARD_CONTENT.stats.users.value)}
              </Typography>
              <StatProgress value={CARD_CONTENT.stats.users.value} max={CARD_CONTENT.stats.users.max} />
            </Stack>
          </Stack>

          <Stack
            spacing={1}
            sx={{
              width: { xs: "100%", sm: "auto" },
            }}
          >
            <Stack direction={"row"} spacing={1}>
              <Rocket size={25} color={theme.palette.text.primary} />
              <Typography sx={labelStyle}>{CARD_CONTENT.stats.clicks.label}</Typography>
            </Stack>

            <Stack spacing={1} alignItems="flex-start">
              <Typography sx={{ ...valueStyle, fontSize: 18 }}>
                {formatNumberShort(CARD_CONTENT.stats.clicks.value)}
              </Typography>
              <StatProgress value={CARD_CONTENT.stats.clicks.value} max={CARD_CONTENT.stats.clicks.max} />
            </Stack>
          </Stack>

          <Stack
            spacing={1}
            sx={{
              width: { xs: "100%", sm: "auto" },
            }}
          >
            <Stack direction={"row"} spacing={1}>
              <ShoppingCart size={25} color={theme.palette.text.primary} />
              <Typography sx={labelStyle}>{CARD_CONTENT.stats.sales.label}</Typography>
            </Stack>

            <Stack spacing={1} alignItems="flex-start">
              <Typography sx={{ ...valueStyle, fontSize: 18 }}>
                {formatNumberShort(CARD_CONTENT.stats.sales.value)}
              </Typography>
              <StatProgress value={CARD_CONTENT.stats.sales.value} max={CARD_CONTENT.stats.sales.max} />
            </Stack>
          </Stack>

          <Stack
            spacing={1}
            sx={{
              width: { xs: "100%", sm: "auto" },
            }}
          >
            <Stack direction={"row"} spacing={1}>
              <Wrench size={25} color={theme.palette.text.primary} />
              <Typography sx={labelStyle}>{CARD_CONTENT.stats.items.label}</Typography>
            </Stack>

            <Stack spacing={1} alignItems="flex-start">
              <Typography sx={{ ...valueStyle, fontSize: 18 }}>
                {CARD_CONTENT.stats.items.value.toLocaleString()}
              </Typography>
              <StatProgress value={CARD_CONTENT.stats.items.value} max={CARD_CONTENT.stats.items.max} />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ActiveUsersCard;
