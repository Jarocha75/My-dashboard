import SignUpImage from "@/assets/image/SignUp.svg";
import AuthFooter from "@/components/auth/AuthFooter";
import SignUpForm from "@/components/auth/SignUpForm";
import { Box, Grid, Typography, useTheme } from "@mui/material";

const SignUp = () => {
  const theme = useTheme();

  return (
    <Grid container minHeight="100dvh">
      <Grid
        size={{ xs: 0, md: 6 }}
        sx={{
          display: { xs: "none", md: "flex" },
          position: "relative",
          backgroundImage: `url(${SignUpImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.1), rgba(255,255,255,0.15))",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            px: 6,
            zIndex: 1,
          }}
        >
          <Typography
            color={theme.palette.text.secondary}
            variant="h6"
            textTransform="uppercase"
            letterSpacing={3}
            mb={1}
          >
            Inspired by the future:
          </Typography>
          <Typography
            variant="h4"
            color={theme.palette.text.primary}
            textTransform="uppercase"
            letterSpacing={4}
            fontWeight="bold"
            whiteSpace="nowrap"
            mb={1}
          >
            The Vision UI dashboard
          </Typography>
        </Box>
      </Grid>

      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          p: 4,
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            maxWidth: 400,
          }}
        >
          <SignUpForm />
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <AuthFooter />
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignUp;
