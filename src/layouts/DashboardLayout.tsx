import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <Box display="flex">
      <Sidebar />
      <Box
        flexGrow={1}
        minHeight="100vh"
        bgcolor="background.default"
        ml="260px"
        p={3}
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
