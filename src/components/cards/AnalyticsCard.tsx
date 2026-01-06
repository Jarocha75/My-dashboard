import { Card, Stack, Typography, useTheme } from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import GroupIcon from "@mui/icons-material/Group";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  cardStyles,
  containerStyles,
  colorUtils,
  mergeSx,
} from "@/styles/commonStyles";

interface Props {
  title: string;
  value: string;
  change: string;
  icon: "money" | "users" | "clients" | "sales";
}

const iconMap = {
  money: <MonetizationOnIcon sx={{ fontSize: 22, color: "white" }} />,
  users: <GroupIcon sx={{ fontSize: 22, color: "white" }} />,
  clients: <PersonAddIcon sx={{ fontSize: 22, color: "white" }} />,
  sales: <ShoppingCartIcon sx={{ fontSize: 22, color: "white" }} />,
};

const AnalyticsCard = ({ title, value, change, icon }: Props) => {
  const theme = useTheme();

  return (
    <Card
      sx={mergeSx(cardStyles.gradientCard(theme), {
        px: 3,
        py: 2,
        color: "white",
        height: 80,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      })}
    >
      <Stack>
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: 600,
            color: "#A0AEC0",
          }}
        >
          {title}
        </Typography>

        <Stack direction="row" alignItems="baseline" gap={1}>
          <Typography sx={{ fontSize: "24px", fontWeight: 700 }}>
            {value}
          </Typography>

          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 600,
              color: colorUtils.getChangeColor(change),
            }}
          >
            {change}
          </Typography>
        </Stack>
      </Stack>

      <Stack sx={containerStyles.iconContainer(theme)}>
        {iconMap[icon]}
      </Stack>
    </Card>
  );
};

export default AnalyticsCard;
