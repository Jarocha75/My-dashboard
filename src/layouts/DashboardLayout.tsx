import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <Box display="flex">
      <Sidebar />
      <Box flexGrow={1} minHeight="100vh" bgcolor="background.default">
        <Navbar />
        <Box p={3}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
