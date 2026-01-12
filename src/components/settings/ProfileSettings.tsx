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
  Avatar,
} from "@mui/material";
import { Camera } from "lucide-react";

interface Props {
  className?: string;
}

const ProfileSettings = ({ className }: Props) => {
  const theme = useTheme();

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
          {/* Header */}
          <Stack spacing={1}>
            <Typography sx={typographyStyles.cardTitle(theme)}>
              Profile Settings
            </Typography>
            <Typography sx={typographyStyles.bodySecondary(theme)}>
              Manage your public profile information
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
              Profile Picture
            </Typography>

            <Stack direction="row" alignItems="center" spacing={3}>
              <Avatar
                sx={{
                  width: 100,
                  height: 100,
                  background: "linear-gradient(135deg, #3A7BFF 0%, #0066FF 100%)",
                }}
              >
                JD
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
              Personal Information
            </Typography>

            <TextField
              label="Display Name"
              defaultValue="John Doe"
              fullWidth
              variant="outlined"
              sx={textFieldSx}
            />

            <TextField
              label="Bio"
              defaultValue="Full-stack developer passionate about building great user experiences"
              fullWidth
              multiline
              rows={3}
              variant="outlined"
              sx={textFieldSx}
            />

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField
                label="Location"
                defaultValue="Bratislava, Slovakia"
                fullWidth
                variant="outlined"
                sx={textFieldSx}
              />
              <TextField
                label="Website"
                defaultValue="https://johndoe.com"
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
              label="LinkedIn"
              defaultValue="linkedin.com/in/johndoe"
              fullWidth
              variant="outlined"
              sx={textFieldSx}
            />

            <TextField
              label="GitHub"
              defaultValue="github.com/johndoe"
              fullWidth
              variant="outlined"
              sx={textFieldSx}
            />

            <TextField
              label="Twitter"
              defaultValue="@johndoe"
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
