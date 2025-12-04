import HouseIcon from "@mui/icons-material/House";
import PersonIcon from "@mui/icons-material/Person";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Box width={230} bgcolor="primary.main" color="white" height="100vh" p={2}>
      <List>
        <ListItemButton component={Link} to="/dashboard">
          <ListItemIcon sx={{ color: "white" }}>
            <HouseIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton component={Link} to="/profile">
          <ListItemIcon sx={{ color: "white" }}>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>
      </List>
    </Box>
  );
};

export default Sidebar;
