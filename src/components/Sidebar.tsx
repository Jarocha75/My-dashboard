import AssignmentIcon from "@mui/icons-material/Assignment";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import BuildIcon from "@mui/icons-material/Build";
import HouseIcon from "@mui/icons-material/House";
import LoginIcon from "@mui/icons-material/Login";
import PersonIcon from "@mui/icons-material/Person";
import TableChartIcon from "@mui/icons-material/TableChart";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import theme from "../theme";

interface Props {
  onLinkClick: () => void;
}

const Sidebar = ({ onLinkClick }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const mainItems = [
    { text: "Dashboard", icon: <HouseIcon />, path: "/dashboard" },
    { text: "Tables", icon: <TableChartIcon />, path: "/tables" },
    { text: "Billing", icon: <CreditCardIcon />, path: "/billing" },
    { text: "RTL", icon: <BuildIcon />, path: "/rtl" },
  ];

  const accountItems = [
    { text: "Profile", icon: <PersonIcon />, path: "/profile" },
    { text: "Sign In", icon: <LoginIcon />, path: "/sign-in" },
    { text: "Sign Up", icon: <AssignmentIcon />, path: "/sign-up" },
  ];

  return (
    <Box
      sx={{
        width: 250,
        height: "100vh",
        position: "fixed",
        background: theme.palette.card.gradient,
        backdropFilter: "blur(12px)",
        borderRight: "1px solid rgba(255,255,255,0.08)",
        color: "white",
        p: "20px 14px",
      }}
    >
      <Typography
        fontWeight={700}
        textAlign="center"
        fontSize="12px"
        sx={{
          letterSpacing: 2,
          textTransform: "uppercase",
          mb: 4,
          mt: 5,
          pb: 2,
          position: "relative",
          background:
            "linear-gradient(to right, white 70%, rgba(255,255,255,0))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          "&::after": {
            content: '""',
            position: "absolute",
            left: "10%",
            bottom: 0,
            width: "80%",
            height: "1px",
            background:
              "linear-gradient(to right, rgba(255,255,255,0.4), rgba(255,255,255,0))",
          },
        }}
      >
        Vision UI Free
      </Typography>

      <List sx={{ flexGrow: 1 }}>
        {mainItems.map((item, index) => (
          <ListItemButton
            key={item.text}
            selected={activeIndex === index}
            onClick={() => {
              setActiveIndex(index);
              onLinkClick?.();
            }}
            component={Link}
            to={item.path}
            sx={{
              mb: 1,
              borderRadius: "12px",
              "&.Mui-selected": {
                background: "rgba(255, 255, 255, 0.15)",
                "&:hover": { background: "rgba(255, 255, 255, 0.25)" },
              },
              "&:hover": {
                background: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            <ListItemIcon
              sx={{ color: theme.palette.icon.blue, minWidth: "38px" }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              slotProps={{ primary: { fontWeight: 500, color: "white" } }}
            />
          </ListItemButton>
        ))}

        <Typography
          sx={{
            fontSize: "11px",
            fontWeight: 700,
            opacity: 0.6,
            mt: 3,
            mb: 1,
            ml: 1,
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          Account Pages
        </Typography>

        {accountItems.map((item, index) => (
          <ListItemButton
            key={item.text}
            selected={activeIndex === index + mainItems.length}
            onClick={() => {
              setActiveIndex(index + mainItems.length);
              onLinkClick?.();
            }}
            component={Link}
            to={item.path}
            sx={{
              mb: 1,
              borderRadius: "12px",
              "&.Mui-selected": {
                background: "rgba(255, 255, 255, 0.15)",
                "&:hover": { background: "rgba(255, 255, 255, 0.20)" },
              },
              "&:hover": {
                background: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            <ListItemIcon
              sx={{ color: theme.palette.icon.blue, minWidth: "38px" }}
            >
              {item.icon}
            </ListItemIcon>

            <ListItemText
              primary={item.text}
              slotProps={{
                primary: { sx: { fontWeight: 500, color: "white" } },
              }}
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
