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
  FormControlLabel,
  Stack,
  Switch,
  Typography,
  useTheme,
  Alert,
} from "@mui/material";
import { ShieldAlert } from "lucide-react";

interface Props {
  className?: string;
}

const PrivacySettings = ({ className }: Props) => {
  const theme = useTheme();

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
              Privacy Settings
            </Typography>
            <Typography sx={typographyStyles.bodySecondary(theme)}>
              Control your privacy and data sharing preferences
            </Typography>
          </Stack>

          <Divider sx={{ borderColor: "rgba(255,255,255,0.08)" }} />

          {/* Profile Visibility */}
          <Stack spacing={2.5}>
            <Typography
              sx={mergeSx(typographyStyles.bodyPrimary(theme), {
                fontWeight: 600,
                fontSize: 16,
              })}
            >
              Profile Visibility
            </Typography>

            <Stack spacing={2}>
              <FormControlLabel
                control={
                  <Switch
                    defaultChecked
                    sx={{
                      "& .MuiSwitch-switchBase.Mui-checked": {
                        color: theme.palette.primary.main,
                      },
                      "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                        {
                          backgroundColor: theme.palette.primary.main,
                        },
                    }}
                  />
                }
                label={
                  <Box>
                    <Typography sx={typographyStyles.bodyPrimary(theme)}>
                      Public Profile
                    </Typography>
                    <Typography
                      sx={mergeSx(typographyStyles.bodySecondary(theme), {
                        fontSize: 13,
                      })}
                    >
                      Make your profile visible to other users
                    </Typography>
                  </Box>
                }
                sx={{ alignItems: "flex-start", m: 0 }}
              />

              <FormControlLabel
                control={
                  <Switch
                    defaultChecked
                    sx={{
                      "& .MuiSwitch-switchBase.Mui-checked": {
                        color: theme.palette.primary.main,
                      },
                      "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                        {
                          backgroundColor: theme.palette.primary.main,
                        },
                    }}
                  />
                }
                label={
                  <Box>
                    <Typography sx={typographyStyles.bodyPrimary(theme)}>
                      Show Email
                    </Typography>
                    <Typography
                      sx={mergeSx(typographyStyles.bodySecondary(theme), {
                        fontSize: 13,
                      })}
                    >
                      Display your email address on your profile
                    </Typography>
                  </Box>
                }
                sx={{ alignItems: "flex-start", m: 0 }}
              />

              <FormControlLabel
                control={
                  <Switch
                    sx={{
                      "& .MuiSwitch-switchBase.Mui-checked": {
                        color: theme.palette.primary.main,
                      },
                      "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                        {
                          backgroundColor: theme.palette.primary.main,
                        },
                    }}
                  />
                }
                label={
                  <Box>
                    <Typography sx={typographyStyles.bodyPrimary(theme)}>
                      Show Activity Status
                    </Typography>
                    <Typography
                      sx={mergeSx(typographyStyles.bodySecondary(theme), {
                        fontSize: 13,
                      })}
                    >
                      Let others see when you're online
                    </Typography>
                  </Box>
                }
                sx={{ alignItems: "flex-start", m: 0 }}
              />
            </Stack>
          </Stack>

          <Divider sx={{ borderColor: "rgba(255,255,255,0.08)" }} />

          {/* Data & Analytics */}
          <Stack spacing={2.5}>
            <Typography
              sx={mergeSx(typographyStyles.bodyPrimary(theme), {
                fontWeight: 600,
                fontSize: 16,
              })}
            >
              Data & Analytics
            </Typography>

            <Stack spacing={2}>
              <FormControlLabel
                control={
                  <Switch
                    defaultChecked
                    sx={{
                      "& .MuiSwitch-switchBase.Mui-checked": {
                        color: theme.palette.primary.main,
                      },
                      "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                        {
                          backgroundColor: theme.palette.primary.main,
                        },
                    }}
                  />
                }
                label={
                  <Box>
                    <Typography sx={typographyStyles.bodyPrimary(theme)}>
                      Analytics & Performance
                    </Typography>
                    <Typography
                      sx={mergeSx(typographyStyles.bodySecondary(theme), {
                        fontSize: 13,
                      })}
                    >
                      Help us improve by sharing usage data
                    </Typography>
                  </Box>
                }
                sx={{ alignItems: "flex-start", m: 0 }}
              />

              <FormControlLabel
                control={
                  <Switch
                    sx={{
                      "& .MuiSwitch-switchBase.Mui-checked": {
                        color: theme.palette.primary.main,
                      },
                      "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                        {
                          backgroundColor: theme.palette.primary.main,
                        },
                    }}
                  />
                }
                label={
                  <Box>
                    <Typography sx={typographyStyles.bodyPrimary(theme)}>
                      Personalized Experience
                    </Typography>
                    <Typography
                      sx={mergeSx(typographyStyles.bodySecondary(theme), {
                        fontSize: 13,
                      })}
                    >
                      Allow us to personalize your experience based on your
                      activity
                    </Typography>
                  </Box>
                }
                sx={{ alignItems: "flex-start", m: 0 }}
              />
            </Stack>
          </Stack>

          <Divider sx={{ borderColor: "rgba(255,255,255,0.08)" }} />

          {/* Data Management */}
          <Stack spacing={2.5}>
            <Typography
              sx={mergeSx(typographyStyles.bodyPrimary(theme), {
                fontWeight: 600,
                fontSize: 16,
              })}
            >
              Data Management
            </Typography>

            <Alert
              icon={<ShieldAlert size={20} />}
              severity="warning"
              sx={{
                backgroundColor: "rgba(255, 152, 0, 0.1)",
                color: theme.palette.warning.main,
                border: "1px solid rgba(255, 152, 0, 0.2)",
                "& .MuiAlert-icon": {
                  color: theme.palette.warning.main,
                },
              }}
            >
              These actions are permanent and cannot be undone
            </Alert>

            <Stack spacing={2}>
              <Button
                variant="outlined"
                fullWidth
                sx={{
                  borderRadius: "12px",
                  textTransform: "none",
                  fontWeight: 600,
                  borderColor: "rgba(255,255,255,0.1)",
                  color: theme.palette.text.secondary,
                  justifyContent: "space-between",
                  "&:hover": {
                    borderColor: "rgba(255,255,255,0.2)",
                    backgroundColor: "rgba(255,255,255,0.02)",
                  },
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      textAlign: "left",
                      color: theme.palette.text.primary,
                    }}
                  >
                    Download Your Data
                  </Typography>
                  <Typography
                    sx={mergeSx(typographyStyles.bodySecondary(theme), {
                      fontSize: 13,
                      textAlign: "left",
                    })}
                  >
                    Get a copy of all your data
                  </Typography>
                </Box>
              </Button>

              <Button
                variant="outlined"
                fullWidth
                sx={{
                  borderRadius: "12px",
                  textTransform: "none",
                  fontWeight: 600,
                  borderColor: "rgba(244, 67, 54, 0.3)",
                  color: theme.palette.error.main,
                  justifyContent: "space-between",
                  "&:hover": {
                    borderColor: "rgba(244, 67, 54, 0.5)",
                    backgroundColor: "rgba(244, 67, 54, 0.05)",
                  },
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      textAlign: "left",
                      color: theme.palette.error.main,
                    }}
                  >
                    Delete Account
                  </Typography>
                  <Typography
                    sx={mergeSx(typographyStyles.bodySecondary(theme), {
                      fontSize: 13,
                      textAlign: "left",
                    })}
                  >
                    Permanently delete your account and all data
                  </Typography>
                </Box>
              </Button>
            </Stack>
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

export default PrivacySettings;
