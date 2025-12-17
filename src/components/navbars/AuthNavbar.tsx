import {
  AppBar,
  Button,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { CircleUser, Codesandbox, KeyRound, UserPen } from "lucide-react";
import NavItem from "./NavItem";

const Navbar = () => {
  const theme = useTheme();

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          background: theme.palette.card.gradientOverlay,
          backdropFilter: "blur(10px)",
          borderRadius: "16px",
          border: `2px solid ${theme.palette.divider}`,
          boxShadow: "0px 4px 20px rgba(0,0,0,0.3)",
          mt: 2,
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            display: "grid",
            gridTemplateColumns: "auto 1fr auto",
            alignItems: "center",
            minHeight: 64,
            px: 3,
          }}
        >
          {/* LEFT */}
          <Typography fontSize={14} fontWeight={400}>
            Vision UI Free
          </Typography>

          {/* CENTER */}
          <Stack direction="row" justifyContent="center" spacing={4}>
            <NavItem icon={Codesandbox} label="Dashboard" />
            <NavItem icon={UserPen} label="Profile" />
            <NavItem icon={CircleUser} label="Sign Up" />
            <NavItem icon={KeyRound} label="Sign In" />
          </Stack>

          {/* RIGHT */}
          <Button variant="contained" size="small">
            Free Download
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
