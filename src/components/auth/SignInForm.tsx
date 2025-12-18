import { zodResolver } from "@hookform/resolvers/zod";
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
import { Link as RouterLink } from "react-router-dom";
import { signInSchema, type SignInFormValues } from "@/validation/auth";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
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
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <TextField
          {...register("password")}
          fullWidth
          label="Password"
          type="password"
          placeholder="Your password"
          error={!!errors.password}
          helperText={errors.password?.message}
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
          disabled={isSubmitting}
        >
          {isSubmitting ? "Signing In..." : "Sign In"}
        </Button>
        <Typography fontSize={14} color="text.secondary" textAlign="center">
          Don&apos;t have an account?{" "}
          <Box
            component={RouterLink}
            to="/auth/signup"
            color="primary.main"
            sx={{
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Sign Up
          </Box>
        </Typography>
      </Stack>
    </Box>
  );
};

export default SignInForm;
