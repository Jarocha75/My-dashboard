import {
  cardStyles,
  mergeSx,
  spacing,
  typographyStyles,
} from "@/styles/commonStyles";
import {
  Box,
  Button,
  Card,
  Divider,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  accountSettingsSchema,
  type AccountSettingsFormData,
} from "@/validation/accountSettings";
import toast from "react-hot-toast";

interface Props {
  className?: string;
}

const AccountSettings = ({ className }: Props) => {
  const theme = useTheme();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AccountSettingsFormData>({
    resolver: zodResolver(accountSettingsSchema),
    defaultValues: {
      fullName: "",
      userName: "",
      phoneNumber: "",
    },
  });

  const onSubmit = (data: AccountSettingsFormData) => {
    console.log("Validaované dáta:", data);
    toast.success("Zmeny boli úspešne uložené");
  };

  const handleCancel = () => {
    reset();
  };

  return (
    <Box className={className}>
      <Card
        sx={mergeSx(cardStyles.glassCard(theme), {
          p: spacing.cardPadding,
          maxWidth: 800,
          mx: "auto",
        })}
      >
        <Stack spacing={3}>
          <Stack spacing={1}>
            <Typography sx={typographyStyles.cardTitle(theme)}>
              Account Settings
            </Typography>
            <Typography sx={typographyStyles.bodySecondary(theme)}>
              Manage your account information and security
            </Typography>
          </Stack>

          <Divider sx={{ borderColor: "rgba(255,255,255,0.08)" }} />

          <Stack spacing={2.5}>
            <Typography
              sx={mergeSx(typographyStyles.bodyPrimary(theme), {
                fontWeight: 600,
                fontSize: 16,
              })}
            >
              Account Information
            </Typography>

            <TextField
              label="Email"
              defaultValue="user@example.com"
              disabled
              fullWidth
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "rgba(255,255,255,0.02)",
                  borderRadius: "12px",
                  "& fieldset": {
                    borderColor: "rgba(255,255,255,0.1)",
                  },
                  "&:hover fieldset": {
                    borderColor: "rgba(255,255,255,0.15)",
                  },
                  "&.Mui-disabled": {
                    "& fieldset": {
                      borderColor: "rgba(255,255,255,0.06)",
                    },
                  },
                },
              }}
            />

            <TextField
              label="User ID"
              defaultValue="USR-2024-001234"
              disabled
              fullWidth
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "rgba(255,255,255,0.02)",
                  borderRadius: "12px",
                  "& fieldset": {
                    borderColor: "rgba(255,255,255,0.1)",
                  },
                  "&:hover fieldset": {
                    borderColor: "rgba(255,255,255,0.15)",
                  },
                  "&.Mui-disabled": {
                    "& fieldset": {
                      borderColor: "rgba(255,255,255,0.06)",
                    },
                  },
                },
              }}
            />
          </Stack>

          <Divider sx={{ borderColor: "rgba(255,255,255,0.08)" }} />

          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2.5}>
              <Typography
                sx={mergeSx(typographyStyles.bodyPrimary(theme), {
                  fontWeight: 600,
                  fontSize: 16,
                })}
              >
                Profile Details
              </Typography>

              <TextField
                {...register("fullName")}
                label="Full Name"
                defaultValue="John Doe"
                error={!!errors.fullName}
                helperText={errors.fullName?.message}
                fullWidth
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "rgba(255,255,255,0.02)",
                    borderRadius: "12px",
                    "& fieldset": {
                      borderColor: "rgba(255,255,255,0.1)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(255,255,255,0.15)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: theme.palette.primary.main,
                    },
                  },
                }}
              />

              <TextField
                {...register("userName")}
                label="Username"
                defaultValue="johndoe"
                error={!!errors.userName}
                helperText={errors.userName?.message}
                fullWidth
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "rgba(255,255,255,0.02)",
                    borderRadius: "12px",
                    "& fieldset": {
                      borderColor: "rgba(255,255,255,0.1)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(255,255,255,0.15)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: theme.palette.primary.main,
                    },
                  },
                }}
              />

              <TextField
                {...register("phoneNumber")}
                label="Phone Number"
                defaultValue="+421 123 456 789"
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber?.message}
                fullWidth
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "rgba(255,255,255,0.02)",
                    borderRadius: "12px",
                    "& fieldset": {
                      borderColor: "rgba(255,255,255,0.1)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(255,255,255,0.15)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: theme.palette.primary.main,
                    },
                  },
                }}
              />
            </Stack>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mt: 3 }}
            >
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  borderRadius: "12px",
                  textTransform: "none",
                  fontWeight: 600,
                  background: "linear-gradient(135deg, #3A7BFF 0%, #0066FF 100%)",
                  boxShadow: "0px 4px 14px rgba(0, 102, 255, 0.35)",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #2E6BE8 0%, #0052CC 100%)",
                  },
                }}
              >
                Save Changes
              </Button>
              <Button
                onClick={handleCancel}
                variant="outlined"
                fullWidth
                sx={{
                  borderRadius: "12px",
                  textTransform: "none",
                  fontWeight: 600,
                  borderColor: "rgba(255,255,255,0.1)",
                  color: theme.palette.text.secondary,
                  "&:hover": {
                    borderColor: "rgba(255,255,255,0.2)",
                    backgroundColor: "rgba(255,255,255,0.02)",
                  },
                }}
              >
                Cancel
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Card>
    </Box>
  );
};

export default AccountSettings;
