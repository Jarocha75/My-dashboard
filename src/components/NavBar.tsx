import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  alpha,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useAuth } from "@/context/useAuth";

const Navbar = () => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [menuMobileOpen, setMenuMobileOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();

  const getPageTitle = () => {
    const path = location.pathname;
    if (path === "/" || path === "/dashboard") return "Dashboard";
    if (path === "/profile") return "Dashboard / Profile";
    if (path === "/tables") return "Dashboard / Tables";
    if (path === "/billing") return "Dashboard / Billing";
    if (path === "/rtl") return "Dashboard / RTL";
    return "Dashboard";
  };

  const handleSignInClick = () => {
    navigate("/auth/signin");
  };

  const handleLogout = () => {
    logout();
    navigate("/auth/signin");
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: theme.palette.navbar.gradient,
          backdropFilter: "blur(10px)",
          borderRadius: "16px",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.3)",
          mt: 2,
        }}
      >
        <Toolbar
          sx={{ display: "flex", justifyContent: "space-between", px: 2 }}
        >
          <Box display="flex" alignItems="center" gap={2}>
            <IconButton
              sx={{
                display: { xs: "flex", md: "none" },
                color: "#fff",
              }}
              onClick={() => setMenuMobileOpen(!menuMobileOpen)}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              variant="h5"
              fontWeight={600}
              color="#fff"
              sx={{ display: { xs: "none", sm: "flex" } }}
            >
              {getPageTitle()}
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={3}>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                background: theme.palette.navbar.gradient,
                border: "0.5px solid rgba(226, 232, 240, 0.3)",
                padding: "6px 12px",
                borderRadius: "10px",
                width: "200",
              }}
            >
              <SearchIcon sx={{ color: "white", fontSize: 18, mr: 1 }} />
              <InputBase
                placeholder="Search..."
                sx={{ color: "white", fontSize: "14px", width: "100%" }}
              />
            </Box>

            {isAuthenticated && user ? (
              <Box
                display="flex"
                alignItems="center"
                gap={1.5}
                sx={{
                  cursor: "pointer",
                  "&:hover": { opacity: 0.8 },
                }}
              >
                <PersonIcon sx={{ color: "#fff", opacity: 0.85 }} />
                <Typography
                  variant="body2"
                  sx={{
                    color: "#fff",
                    fontWeight: 500,
                    display: { xs: "none", md: "block" },
                  }}
                >
                  {user.name || user.email}
                </Typography>
                <Button
                  onClick={handleLogout}
                  variant="outlined"
                  size="small"
                  sx={{
                    color: "#fff",
                    borderColor: "rgba(255, 255, 255, 0.3)",
                    "&:hover": {
                      borderColor: "#fff",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                    display: { xs: "none", md: "block" },
                  }}
                >
                  Odhlásiť sa
                </Button>
              </Box>
            ) : (
              <Box
                display="flex"
                alignItems="center"
                sx={{
                  cursor: "pointer",
                  "&:hover": { opacity: 0.7 },
                }}
                onClick={handleSignInClick}
              >
                <PersonIcon sx={{ color: "#fff", opacity: 0.85 }} />
                <Typography
                  variant="body1"
                  sx={{
                    color: "#fff",
                    ml: 1,
                    fontWeight: 500,
                    display: { xs: "none", md: "block" },
                    opacity: 0.9,
                  }}
                >
                  Sign In
                </Typography>
              </Box>
            )}

            <IconButton
              sx={{
                color: "white",
                opacity: 0.8,
                display: { xs: "none", md: "flex" },
              }}
            >
              <SettingsIcon />
            </IconButton>

            <IconButton
              sx={{
                color: "white",
                opacity: 0.8,
                display: { xs: "none", md: "flex" },
              }}
            >
              <NotificationsIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={menuMobileOpen}
        onClose={() => setMenuMobileOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: 250,
              background: "theme.palette.card.gradient",
              borderRight: `1px solid ${alpha("#fff", 0.1)}`,
              p: 0,
            },
          },
        }}
      >
        <Sidebar onLinkClick={() => setMenuMobileOpen(false)} isInDrawer />
      </Drawer>
    </>
  );
};

export default Navbar;
