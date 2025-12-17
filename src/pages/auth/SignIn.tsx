import SigninImage from "@/assets/image/Signin.png";
import SignInForm from "@/components/auth/SignInForm";
import { Box, Grid } from "@mui/material";

const SignIn = () => {
  return (
    <Grid container minHeight="100dvh">
      <Grid
        size={{ xs: 0, md: 6 }}
        sx={{
          display: { xs: "none", md: "flex" },
          position: "relative",
          backgroundImage: `url(${SigninImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.3), rgba(0,0,0,0.7))",
          }}
        />
      </Grid>

      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: 4,
        }}
      >
        <SignInForm />
      </Grid>
    </Grid>
  );
};

export default SignIn;
