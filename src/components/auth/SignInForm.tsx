import { useAuth } from "@/context/useAuth";
import { loginRequest } from "@/services/auth";
import { signInSchema, type SignInFormValues } from "@/validation/auth";
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
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";

const SignInForm = () => {
  const { login } = useAuth();

  const mutation = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      loginRequest(email, password),
    onSuccess: ({ token, user }) => {
      console.log("Login successful:", user);
      login(token, user);
    },
  });

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
    mutation.mutate({ email: data.email, password: data.password });
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
