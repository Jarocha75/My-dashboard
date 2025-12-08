import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/NavBar";
import { Outlet } from "react-router-dom";

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
          display: { xs: "none", md: "block" },
          flexShrink: 0,
        }}
      >
        <Sidebar onLinkClick={() => {}} />
      </Box>

      <Box
        flexGrow={1}
        minHeight="100vh"
        p={3}
        sx={{
          transition: "0.3s ease",
          color: "white",
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
