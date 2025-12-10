import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const SIDEBAR_WIDTH = 250;

const DashboardLayout = () => {
  return (
    <Box
      display="flex"
      minHeight="100vh"
      sx={{
        backgroundImage: `
          radial-gradient(circle at 20% 0%, rgba(49, 85, 215, 0.15) 0%, transparent 60%),
          linear-gradient(180deg, #0F1535 0%, #111A4B 40%, #0F1535 100%)`,
      }}
    >
      <Box
        sx={{
          width: SIDEBAR_WIDTH,
          display: { xs: "none", md: "block" },
          flexShrink: 0,
        }}
      >
        <Sidebar onLinkClick={() => {}} />
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minHeight: "100vh",
          px: { xs: 2, sm: 3 },
          pt: 2,
          transition: "margin 0.3s ease",
          overflowX: "hidden",
        }}
      >
        <Navbar />
        <Box mt={3}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
