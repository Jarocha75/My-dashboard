import { Box, Card, Typography, useTheme } from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import GroupIcon from "@mui/icons-material/Group";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

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
      sx={{
        background: theme.palette.card.gradient,
        borderRadius: 3,
        px: 3,
        py: 2,
        color: "white",
        height: 80,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0px 4px 14px rgba(0,0,0,0.3)",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: 600,
            color: "#A0AEC0",
          }}
        >
          {title}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "baseline", gap: 1 }}>
          <Typography sx={{ fontSize: "24px", fontWeight: 700 }}>
            {value}
          </Typography>

          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 600,
              color: change.startsWith("-") ? "#f5365c" : "#5BE374",
            }}
          >
            {change}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          width: 46,
          height: 46,
          borderRadius: "12px",
          background: theme.palette.icon.blueGradient,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexShrink: 0,
        }}
      >
        {iconMap[icon]}
      </Box>
    </Card>
  );
};

export default AnalyticsCard;
