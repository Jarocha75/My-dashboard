import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import SignUpForm from "./SignUpForm";

const iconStyle = {
  width: 56,
  height: 56,
  borderRadius: 2,
  border: "1px solid rgba(255,255,255,0.2)",
  color: "white",
  transition: "all 0.2s ease",
  "&:hover": {
    borderColor: "rgba(255,255,255,0.5)",
    backgroundColor: "rgba(255,255,255,0.05)",
    transform: "translateY(-2px)",
  },
};

const glassStyle = {
  border: "1px solid rgba(255, 255, 255, 0.2)",
  boxShadow: "0 8px 16px 0 rgba(31, 38, 135, 0.37)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  borderRadius: "16px",
  p: 2,
  m: 2,
};

const GlassCard = () => {
  return (
    <Box sx={{ ...glassStyle, maxWidth: 420, width: "100%" }}>
      <Typography
        fontSize={16}
        fontWeight={600}
        color="white"
        textAlign="center"
        mb={2}
      >
        Register with
      </Typography>

      <Stack direction="row" justifyContent="center" spacing={2}>
        <IconButton sx={iconStyle}>
          <FacebookIcon />
        </IconButton>
        <IconButton sx={iconStyle}>
          <AppleIcon />
        </IconButton>
        <IconButton sx={iconStyle}>
          <GoogleIcon />
        </IconButton>
      </Stack>

      <Divider
        sx={{
          my: 4,
          color: "rgba(255,255,255,0.4)",
          "&::before, &::after": {
            borderColor: "rgba(255,255,255,0.2)",
          },
        }}
      >
        or
      </Divider>
      <SignUpForm />
    </Box>
  );
};

export default GlassCard;
