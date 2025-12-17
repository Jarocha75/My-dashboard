import { Box, Grid, Typography } from "@mui/material";
import SigninImage from "@/assets/image/Signin.png";

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
        <Box sx={{ width: "100%", maxWidth: 400 }}>
          <Typography variant="h4" fontWeight={700} mb={2}>
            Sign In
          </Typography>
          {/* Sign In Form - Placeholder */}
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <input
              type="email"
              placeholder="Email"
              style={{
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                fontSize: "16px",
              }}
            />
            <input
              type="password"
              placeholder="Password"
              style={{
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                fontSize: "16px",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "12px",
                borderRadius: "8px",
                border: "none",
                backgroundColor: "#3155D7",
                color: "white",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Sign In
            </button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignIn;
