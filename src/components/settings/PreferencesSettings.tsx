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
  FormControl,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Switch,
  Typography,
  useTheme,
} from "@mui/material";

interface Props {
  className?: string;
}

const PreferencesSettings = ({ className }: Props) => {
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
              Preferences
            </Typography>
            <Typography sx={typographyStyles.bodySecondary(theme)}>
              Customize your application experience
            </Typography>
          </Stack>

          <Divider sx={{ borderColor: "rgba(255,255,255,0.08)" }} />

          {/* Appearance */}
          <Stack spacing={2.5}>
            <Typography
              sx={mergeSx(typographyStyles.bodyPrimary(theme), {
                fontWeight: 600,
                fontSize: 16,
              })}
            >
              Appearance
            </Typography>

            <Box>
              <Typography
                sx={mergeSx(typographyStyles.bodyPrimary(theme), { mb: 1.5 })}
              >
                Theme
              </Typography>
              <FormControl component="fieldset">
                <RadioGroup defaultValue="dark" name="theme-group">
                  <FormControlLabel
                    value="light"
                    control={
                      <Radio
                        sx={{
                          color: "rgba(255,255,255,0.3)",
                          "&.Mui-checked": {
                            color: theme.palette.primary.main,
                          },
                        }}
                      />
                    }
                    label="Light"
                  />
                  <FormControlLabel
                    value="dark"
                    control={
                      <Radio
                        sx={{
                          color: "rgba(255,255,255,0.3)",
                          "&.Mui-checked": {
                            color: theme.palette.primary.main,
                          },
                        }}
                      />
                    }
                    label="Dark"
                  />
                  <FormControlLabel
                    value="system"
                    control={
                      <Radio
                        sx={{
                          color: "rgba(255,255,255,0.3)",
                          "&.Mui-checked": {
                            color: theme.palette.primary.main,
                          },
                        }}
                      />
                    }
                    label="System Default"
                  />
                </RadioGroup>
              </FormControl>
            </Box>

            <FormControlLabel
              control={
                <Switch
                  defaultChecked
                  sx={{
                    "& .MuiSwitch-switchBase.Mui-checked": {
                      color: theme.palette.primary.main,
                    },
                    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                      backgroundColor: theme.palette.primary.main,
                    },
                  }}
                />
              }
              label={
                <Box>
                  <Typography sx={typographyStyles.bodyPrimary(theme)}>
                    Compact Mode
                  </Typography>
                  <Typography
                    sx={mergeSx(typographyStyles.bodySecondary(theme), {
                      fontSize: 13,
                    })}
                  >
                    Reduce spacing for a more compact layout
                  </Typography>
                </Box>
              }
              sx={{ alignItems: "flex-start", m: 0 }}
            />
          </Stack>

          <Divider sx={{ borderColor: "rgba(255,255,255,0.08)" }} />

          {/* Language & Region */}
          <Stack spacing={2.5}>
            <Typography
              sx={mergeSx(typographyStyles.bodyPrimary(theme), {
                fontWeight: 600,
                fontSize: 16,
              })}
            >
              Language & Region
            </Typography>

            <Box>
              <Typography
                sx={mergeSx(typographyStyles.bodyPrimary(theme), {
                  mb: 1.5,
                  fontSize: 14,
                })}
              >
                Language
              </Typography>
              <Select
                defaultValue="en"
                fullWidth
                sx={{
                  backgroundColor: "rgba(255,255,255,0.02)",
                  borderRadius: "12px",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255,255,255,0.1)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255,255,255,0.15)",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: theme.palette.primary.main,
                  },
                }}
              >
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="sk">Slovenčina</MenuItem>
                <MenuItem value="cs">Čeština</MenuItem>
                <MenuItem value="de">Deutsch</MenuItem>
                <MenuItem value="fr">Français</MenuItem>
              </Select>
            </Box>

            <Box>
              <Typography
                sx={mergeSx(typographyStyles.bodyPrimary(theme), {
                  mb: 1.5,
                  fontSize: 14,
                })}
              >
                Timezone
              </Typography>
              <Select
                defaultValue="europe/bratislava"
                fullWidth
                sx={{
                  backgroundColor: "rgba(255,255,255,0.02)",
                  borderRadius: "12px",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255,255,255,0.1)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255,255,255,0.15)",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: theme.palette.primary.main,
                  },
                }}
              >
                <MenuItem value="europe/bratislava">
                  (GMT+01:00) Bratislava
                </MenuItem>
                <MenuItem value="europe/prague">(GMT+01:00) Prague</MenuItem>
                <MenuItem value="europe/berlin">(GMT+01:00) Berlin</MenuItem>
                <MenuItem value="europe/london">(GMT+00:00) London</MenuItem>
                <MenuItem value="america/new_york">
                  (GMT-05:00) New York
                </MenuItem>
              </Select>
            </Box>

            <Box>
              <Typography
                sx={mergeSx(typographyStyles.bodyPrimary(theme), {
                  mb: 1.5,
                  fontSize: 14,
                })}
              >
                Date Format
              </Typography>
              <Select
                defaultValue="dd/mm/yyyy"
                fullWidth
                sx={{
                  backgroundColor: "rgba(255,255,255,0.02)",
                  borderRadius: "12px",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255,255,255,0.1)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255,255,255,0.15)",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: theme.palette.primary.main,
                  },
                }}
              >
                <MenuItem value="dd/mm/yyyy">DD/MM/YYYY</MenuItem>
                <MenuItem value="mm/dd/yyyy">MM/DD/YYYY</MenuItem>
                <MenuItem value="yyyy-mm-dd">YYYY-MM-DD</MenuItem>
              </Select>
            </Box>
          </Stack>

          <Divider sx={{ borderColor: "rgba(255,255,255,0.08)" }} />

          {/* Accessibility */}
          <Stack spacing={2.5}>
            <Typography
              sx={mergeSx(typographyStyles.bodyPrimary(theme), {
                fontWeight: 600,
                fontSize: 16,
              })}
            >
              Accessibility
            </Typography>

            <FormControlLabel
              control={
                <Switch
                  sx={{
                    "& .MuiSwitch-switchBase.Mui-checked": {
                      color: theme.palette.primary.main,
                    },
                    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                      backgroundColor: theme.palette.primary.main,
                    },
                  }}
                />
              }
              label={
                <Box>
                  <Typography sx={typographyStyles.bodyPrimary(theme)}>
                    Reduced Motion
                  </Typography>
                  <Typography
                    sx={mergeSx(typographyStyles.bodySecondary(theme), {
                      fontSize: 13,
                    })}
                  >
                    Minimize animations and transitions
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
                    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                      backgroundColor: theme.palette.primary.main,
                    },
                  }}
                />
              }
              label={
                <Box>
                  <Typography sx={typographyStyles.bodyPrimary(theme)}>
                    High Contrast
                  </Typography>
                  <Typography
                    sx={mergeSx(typographyStyles.bodySecondary(theme), {
                      fontSize: 13,
                    })}
                  >
                    Increase contrast for better visibility
                  </Typography>
                </Box>
              }
              sx={{ alignItems: "flex-start", m: 0 }}
            />

            <Box>
              <Typography
                sx={mergeSx(typographyStyles.bodyPrimary(theme), {
                  mb: 1.5,
                  fontSize: 14,
                })}
              >
                Font Size
              </Typography>
              <Select
                defaultValue="medium"
                fullWidth
                sx={{
                  backgroundColor: "rgba(255,255,255,0.02)",
                  borderRadius: "12px",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255,255,255,0.1)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255,255,255,0.15)",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: theme.palette.primary.main,
                  },
                }}
              >
                <MenuItem value="small">Small</MenuItem>
                <MenuItem value="medium">Medium</MenuItem>
                <MenuItem value="large">Large</MenuItem>
                <MenuItem value="extra-large">Extra Large</MenuItem>
              </Select>
            </Box>
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

export default PreferencesSettings;
