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
        background: "linear-gradient(135deg, #0f1535 0%, #191c54 100%)",
      }}
    >
      <Box
        sx={{
          width: { SIDEBAR_WIDTH },
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
          ml: { xs: 0, md: `${SIDEBAR_WIDTH}px` },
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
