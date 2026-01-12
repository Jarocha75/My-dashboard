import { mergeSx, typographyStyles } from "@/styles/commonStyles";
import {
  Box,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  BellRing,
  Bolt,
  EarthLock,
  UserRound,
  UserPen,
  ArrowLeft,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@mui/material";

interface Props {
  title?: string;
  onLinkClick?: () => void;
  isInDrawer?: boolean;
}

const SettingsSidebar = ({
  title = "Settings",
  onLinkClick,
  isInDrawer = false,
}: Props) => {
  const theme = useTheme();
  const location = useLocation();

  const items = [
    { text: "Account", icon: <UserRound />, path: "/settings/account" },
    {
      text: "Profile",
      icon: <UserPen />,
      path: "/settings/profile",
    },
    {
      text: "Notifications",
      icon: <BellRing />,
      path: "/settings/notifications",
    },
    { text: "Privacy", icon: <EarthLock />, path: "/settings/privacy" },
    { text: "Preferences", icon: <Bolt />, path: "/settings/preferences" },
  ];

  return (
    <Box
      sx={{
        height: isInDrawer ? "100vh" : "100vh",
        position: isInDrawer ? "relative" : "fixed",
        width: 250,
        background: theme.palette.card.gradientOverlay,
        backdropFilter: "blur(12px)",
        borderRight: "1px solid rgba(255,255,255,0.08)",
        p: 3,
        pt: 4,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Button
        component={Link}
        to="/dashboard"
        onClick={() => onLinkClick?.()}
        startIcon={<ArrowLeft size={18} />}
        sx={{
          mb: 3,
          justifyContent: "flex-start",
          color: "rgba(255, 255, 255, 0.7)",
          textTransform: "none",
          fontWeight: 500,
          fontSize: "14px",
          borderRadius: "12px",
          py: 1,
          "&:hover": {
            background: "rgba(255, 255, 255, 0.1)",
            color: "white",
          },
        }}
      >
        Back to Dashboard
      </Button>

      <Typography
        sx={mergeSx(typographyStyles.cardTitle(theme), {
          mb: 3,
          pb: 2,
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            left: 0,
            bottom: 0,
            width: "100%",
            height: "1px",
            background:
              "linear-gradient(to right, rgba(255,255,255,0.3), rgba(255,255,255,0))",
          },
        })}
      >
        {title}
      </Typography>
      <Box sx={{ flex: 1, overflow: "auto" }}>
        {items.map((item) => (
          <ListItemButton
            key={item.text}
            selected={location.pathname.startsWith(item.path)}
            onClick={() => onLinkClick?.()}
            component={Link}
            to={item.path}
            sx={{
              borderRadius: "12px",
              mb: 1,
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
              sx={{
                minWidth: 36,
                color: theme.palette.icon.blue,
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              slotProps={{
                primary: {
                  sx: {
                    fontWeight: 500,
                    color: "white",
                  },
                },
              }}
            />
          </ListItemButton>
        ))}
      </Box>
    </Box>
  );
};

export default SettingsSidebar;
