import { useUpdateProfileSettings } from "@/hooks/useUpdateProfileSettings";
import { useUserProfile } from "@/hooks/useUserProfile";
import {
  cardStyles,
  mergeSx,
  spacing,
  typographyStyles,
} from "@/styles/commonStyles";
import {
  profileSettingsSchema,
  type ProfileSettingsFormData,
} from "@/validation/profileSettings";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Button,
  Card,
  Divider,
  Stack,
  TextField,
  Typography,
  useTheme,
  Avatar,
} from "@mui/material";
import { Camera } from "lucide-react";
import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";

const PROFILE_CONTENT = {
  title: "Profile Settings",
  subTitle: "Manage you public profile information",
  picture: "Profile Picture",
  personal: "Personal Information",
};

const getInitials = (name?: string, displayName?: string): string => {
  const nameToUse = displayName || name || "";
  const words = nameToUse.trim().split(/\s+/);

  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }

  return nameToUse.slice(0, 2).toUpperCase();
};

interface Props {
  className?: string;
}

const ProfileSettings = ({ className }: Props) => {
  const theme = useTheme();
  const { data: userProfile, isLoading, isError } = useUserProfile();
  const updateProfile = useUpdateProfileSettings();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProfileSettingsFormData>({
    resolver: zodResolver(profileSettingsSchema),
  });

  const getDefaultValues = useCallback(
    () => ({
      displayName: userProfile?.displayName || "",
      bio: userProfile?.bio || "",
      location: userProfile?.location || "",
      website: userProfile?.website || "",
      linkedin: userProfile?.linkedin || "",
      github: userProfile?.github || "",
      whatsup: userProfile?.whatsup || "",
    }),
    [userProfile]
  );

  useEffect(() => {
    if (userProfile) {
      reset(getDefaultValues());
    }
  }, [userProfile, reset, getDefaultValues]);

  const onSubmit = (data: ProfileSettingsFormData) => {
    updateProfile.mutate(data);
  };

  const handleCancel = () => {
    reset(getDefaultValues());
  };

  const textFieldSx = {
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
  };

  if (isLoading) {
    return (
      <Box className={className}>
        <Card
          sx={mergeSx(cardStyles.glassCard(theme), { p: spacing.cardPadding })}
        >
          <Typography>Načítavam...</Typography>
        </Card>
      </Box>
    );
  }

  if (isError) {
    return (
      <Box className={className}>
        <Card
          sx={mergeSx(cardStyles.glassCard(theme), { p: spacing.cardPadding })}
        >
          <Typography color="error">Chyba pri načítaní profilu</Typography>
        </Card>
      </Box>
    );
  }

  return (
    <Box className={className}>
      <Card
        sx={mergeSx(cardStyles.glassCard(theme), {
          p: spacing.cardPadding,
          maxWidth: 800,
          mx: "auto",
        })}
      >
        <Stack spacing={3} component="form" onSubmit={handleSubmit(onSubmit)}>
          {/* Header */}
          <Stack spacing={1}>
            <Typography sx={typographyStyles.cardTitle(theme)}>
              {PROFILE_CONTENT.title}
            </Typography>
            <Typography sx={typographyStyles.bodySecondary(theme)}>
              {PROFILE_CONTENT.subTitle}
            </Typography>
          </Stack>

          <Divider sx={{ borderColor: "rgba(255,255,255,0.08)" }} />

          {/* Profile Picture Section */}
          <Stack spacing={2.5}>
            <Typography
              sx={mergeSx(typographyStyles.bodyPrimary(theme), {
                fontWeight: 600,
                fontSize: 16,
              })}
            >
              {PROFILE_CONTENT.picture}
            </Typography>

            <Stack direction="row" alignItems="center" spacing={3}>
              <Avatar
                sx={{
                  width: 100,
                  height: 100,
                  background:
                    "linear-gradient(135deg, #3A7BFF 0%, #0066FF 100%)",
                }}
              >
                {getInitials(userProfile?.name ?? undefined, userProfile?.displayName ?? undefined)}
              </Avatar>
              <Button
                variant="outlined"
                startIcon={<Camera size={18} />}
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
                Change Photo
              </Button>
            </Stack>
          </Stack>

          <Divider sx={{ borderColor: "rgba(255,255,255,0.08)" }} />

          {/* Personal Information */}
          <Stack spacing={2.5}>
            <Typography
              sx={mergeSx(typographyStyles.bodyPrimary(theme), {
                fontWeight: 600,
                fontSize: 16,
              })}
            >
              {PROFILE_CONTENT.personal}
            </Typography>

            <TextField
              {...register("displayName")}
              label="Display Name"
              error={!!errors.displayName}
              helperText={errors.displayName?.message}
              fullWidth
              variant="outlined"
              sx={textFieldSx}
            />

            <TextField
              {...register("bio")}
              label="Bio"
              error={!!errors.bio}
              helperText={errors.bio?.message}
              fullWidth
              multiline
              rows={3}
              variant="outlined"
              sx={textFieldSx}
            />

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField
                {...register("location")}
                label="Location"
                error={!!errors.location}
                helperText={errors.location?.message}
                fullWidth
                variant="outlined"
                sx={textFieldSx}
              />
              <TextField
                {...register("website")}
                label="Website"
                error={!!errors.website}
                helperText={errors.website?.message}
                fullWidth
                variant="outlined"
                sx={textFieldSx}
              />
            </Stack>
          </Stack>

          <Divider sx={{ borderColor: "rgba(255,255,255,0.08)" }} />

          {/* Social Links */}
          <Stack spacing={2.5}>
            <Typography
              sx={mergeSx(typographyStyles.bodyPrimary(theme), {
                fontWeight: 600,
                fontSize: 16,
              })}
            >
              Social Links
            </Typography>

            <TextField
              {...register("linkedin")}
              label="LinkedIn"
              error={!!errors.linkedin}
              helperText={errors.linkedin?.message}
              fullWidth
              variant="outlined"
              sx={textFieldSx}
            />

            <TextField
              {...register("github")}
              label="GitHub"
              error={!!errors.github}
              helperText={errors.github?.message}
              fullWidth
              variant="outlined"
              sx={textFieldSx}
            />

            <TextField
              {...register("whatsup")}
              label="WhatsApp"
              error={!!errors.whatsup}
              helperText={errors.whatsup?.message}
              fullWidth
              variant="outlined"
              sx={textFieldSx}
            />
          </Stack>

          {/* Action Buttons */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ mt: 2 }}
          >
            <Button
              type="submit"
              disabled={updateProfile.isPending}
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
              {updateProfile.isPending ? "Ukladám..." : "Save Changes"}
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
        </Stack>
      </Card>
    </Box>
  );
};

export default ProfileSettings;
