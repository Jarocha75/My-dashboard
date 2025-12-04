import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  alpha,
  useTheme,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  const theme = useTheme();

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: theme.palette.navbar.gradient,
        backdropFilter: "blur(8px)",
        borderRadius: "16px",
        boxShadow: "0px 4px 20px rgba(0,0,0,0.3)",
        mt: 2,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center" gap={2}>
          <Typography variant="h5" fontWeight={600} color="#fff">
            Dashboard
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={2}>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              backgroundColor: alpha("#fff", 0.15),
              padding: "6px 14px",
              borderRadius: "12px",
              width: "220px",
            }}
          >
            <SearchIcon sx={{ color: "white", fontSize: 20, mr: 1 }} />
            <InputBase
              placeholder="Search..."
              sx={{ color: "white", width: "100%" }}
            />
          </Box>

          <Box
            display="flex"
            alignItems="center"
            sx={{
              cursor: "pointer",
              "&:hover": { opacity: 0.8 },
            }}
          >
            <PersonIcon
              sx={{ color: theme.palette.common.white, fontSize: 24 }}
            />
            <Typography
              variant="body1"
              color={theme.palette.common.white}
              sx={{ cursor: "pointer", fontWeight: 500 }}
            >
              Sign In
            </Typography>
          </Box>

          <IconButton sx={{ color: theme.palette.common.white }}>
            <SettingsIcon />
          </IconButton>

          <IconButton sx={{ color: theme.palette.common.white }}>
            <NotificationsIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
