import {
  Box,
  Button,
  FormControlLabel,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";

const SignInForm = () => {
  return (
    <Box maxWidth={400} width="100%">
      <Typography variant="h2" fontWeight={700} mb={2}>
        Nice to see you!
      </Typography>
      <Typography fontSize={14} color="text.secondary" mb={4}>
        Enter your email and password to sign in
      </Typography>

      <Stack component="form" spacing={3}>
        <TextField
          label="Email"
          type="email"
          placeholder="Your email address"
        />

        <TextField
          label="Password"
          type="password"
          placeholder="Your password"
        />
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Remember me"
        />
        <Button variant="contained" size="large" sx={{ mt: 2, py: 1.5 }}>
          Sign In
        </Button>
      </Stack>
    </Box>
  );
};

export default SignInForm;
