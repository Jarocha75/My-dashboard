import { Box, Typography } from "@mui/material";

const NavBar = () => {
  return (
    <Box
      height={64}
      display="flex"
      alignItems="center"
      px={3}
      bgcolor="background.paper"
      boxShadow="0px 2px 4px rgba(0,0,0,0.06)"
    >
      <Typography variant="h6">My Vision UI Dashboard</Typography>
    </Box>
  );
};

export default NavBar;
