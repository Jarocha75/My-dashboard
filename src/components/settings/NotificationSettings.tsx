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
} from "@mui/material";

interface Props {
  className?: string;
}

const NotificationSettings = ({ className }: Props) => {
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
          <Stack spacing={1}>
            <Typography sx={typographyStyles.cardTitle(theme)}>
              Notification Settings
            </Typography>
            <Typography sx={typographyStyles.bodySecondary(theme)}>
              Manage how you receive notifications
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
              Email Notifications
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
                      Account Activity
                    </Typography>
                    <Typography
                      sx={mergeSx(typographyStyles.bodySecondary(theme), {
                        fontSize: 13,
                      })}
                    >
                      Get notified about important account changes
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
                      Transaction Updates
                    </Typography>
                    <Typography
                      sx={mergeSx(typographyStyles.bodySecondary(theme), {
                        fontSize: 13,
                      })}
                    >
                      Receive updates about your transactions
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
                      Marketing Emails
                    </Typography>
                    <Typography
                      sx={mergeSx(typographyStyles.bodySecondary(theme), {
                        fontSize: 13,
                      })}
                    >
                      Receive promotional content and updates
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
                      Security Alerts
                    </Typography>
                    <Typography
                      sx={mergeSx(typographyStyles.bodySecondary(theme), {
                        fontSize: 13,
                      })}
                    >
                      Get notified about security-related activities
                    </Typography>
                  </Box>
                }
                sx={{ alignItems: "flex-start", m: 0 }}
              />
            </Stack>
          </Stack>

          <Divider sx={{ borderColor: "rgba(255,255,255,0.08)" }} />

          <Stack spacing={2.5}>
            <Typography
              sx={mergeSx(typographyStyles.bodyPrimary(theme), {
                fontWeight: 600,
                fontSize: 16,
              })}
            >
              Push Notifications
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
                      Enable Push Notifications
                    </Typography>
                    <Typography
                      sx={mergeSx(typographyStyles.bodySecondary(theme), {
                        fontSize: 13,
                      })}
                    >
                      Receive real-time push notifications on your device
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
                      Sound
                    </Typography>
                    <Typography
                      sx={mergeSx(typographyStyles.bodySecondary(theme), {
                        fontSize: 13,
                      })}
                    >
                      Play sound for notifications
                    </Typography>
                  </Box>
                }
                sx={{ alignItems: "flex-start", m: 0 }}
              />
            </Stack>
          </Stack>

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

export default NotificationSettings;
