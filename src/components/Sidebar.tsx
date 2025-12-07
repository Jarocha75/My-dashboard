import AssignmentIcon from "@mui/icons-material/Assignment";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import FormatTextdirectionRToLIcon from "@mui/icons-material/FormatTextdirectionRToL";
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

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const mainItems = [
    { text: "Dashboard", icon: <HouseIcon />, path: "/dashboard" },
    { text: "Tables", icon: <TableChartIcon />, path: "/tables" },
    { text: "Billing", icon: <CreditCardIcon />, path: "/billing" },
    { text: "RTL", icon: <FormatTextdirectionRToLIcon />, path: "/rtl" },
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
        top: 16,
        left: 16,
        borderRadius: 4,
        background: "linear-gradient(135deg, #0f1535 0%, #191c54 100%)",
        color: "white",
        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
        p: 2,
      }}
    >
      <Typography variant="h5" fontWeight={600} mb={4} textAlign="center">
        Vision UI
      </Typography>

      <List>
        {mainItems.map((item, index) => (
          <ListItemButton
            key={item.text}
            selected={activeIndex === index}
            onClick={() => setActiveIndex(index)}
            component={Link}
            to={item.path}
            sx={{
              mb: 1,
              borderRadius: 2,
              "&.Mui-selected": {
                background: "rgba(255, 255, 255, 0.15)",
                "&:hover": { background: "rgba(255, 255, 255, 0.25)" },
              },
              "&:hover": {
                background: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            <ListItemIcon sx={{ color: "#4bb4ff", minWidth: "40px" }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              slotProps={{ primary: { fontWeight: 500 } }}
            />
          </ListItemButton>
        ))}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            opacity: 0.6,
            mt: 4,
            mb: 2,
            px: 1,
            gap: 1,
          }}
        >
          <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
            ACCOUNT PAGES
          </Typography>
        </Box>

        {accountItems.map((item, index) => (
          <ListItemButton
            key={item.text}
            selected={activeIndex === index + mainItems.length}
            onClick={() => setActiveIndex(index + mainItems.length)}
            component={Link}
            to={item.path}
            sx={{
              mb: 1,
              borderRadius: 2,
              "&.Mui-selected": {
                background: "rgba(255, 255, 255, 0.15)",
                "&:hover": { background: "rgba(255, 255, 255, 0.25)" },
              },
              "&:hover": {
                background: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            <ListItemIcon sx={{ color: "#4bb4ff", minWidth: "40px" }}>
              {item.icon}
            </ListItemIcon>

            <ListItemText
              primary={item.text}
              slotProps={{
                primary: { sx: { fontWeight: 500 } },
              }}
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
