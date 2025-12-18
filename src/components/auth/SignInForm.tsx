import {
  Box,
  Button,
  FormControlLabel,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";

interface SignInFormValues {
  email?: string;
  password?: string;
  rememberMe?: boolean;
}

const SignInForm = () => {
  const { register, handleSubmit } = useForm<SignInFormValues>({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: true,
    },
  });

  const onSubmit = (data: SignInFormValues) => {
    console.log(data);
  };

  return (
    <Box maxWidth={400} width="100%">
      <Typography variant="h2" fontWeight={700} mb={2}>
        Nice to see you!
      </Typography>
      <Typography fontSize={14} color="text.secondary" mb={4}>
        Enter your email and password to sign in
      </Typography>

      <Stack component="form" spacing={3} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register("email")}
          fullWidth
          label="Email"
          type="email"
          placeholder="Your email address"
        />

        <TextField
          {...register("password")}
          fullWidth
          label="Password"
          type="password"
          placeholder="Your password"
        />
        <FormControlLabel
          control={<Switch {...register("rememberMe")} />}
          label="Remember me"
        />
        <Button
          variant="contained"
          size="large"
          sx={{ mt: 2, py: 1.5 }}
          type="submit"
        >
          Sign In
        </Button>
        <Typography fontSize={14} color="text.secondary" textAlign="center">
          Don&apos;t have an account?{" "}
          <Box
            component="span"
            color="primary.main"
            sx={{ cursor: "pointer", fontWeight: 600 }}
          >
            Sign Up
          </Box>
        </Typography>
      </Stack>
    </Box>
  );
};

export default SignInForm;
