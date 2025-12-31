import { useState } from "react";
import {
  Card,
  FormControlLabel,
  FormGroup,
  Stack,
  Switch,
  Typography,
  useTheme,
} from "@mui/material";

interface SettingItem {
  id: string;
  label: string;
  checked: boolean;
}

interface Settings {
  account: SettingItem[];
  application: SettingItem[];
}

const INITIAL_SETTINGS: Settings = {
  account: [
    { id: "follow", label: "Email me when someone follows me", checked: true },
    {
      id: "answer",
      label: "Email me when someone answers on my post",
      checked: false,
    },
    {
      id: "mention",
      label: "Email me when someone mentions me",
      checked: true,
    },
  ],
  application: [
    { id: "launches", label: "New launches and projects", checked: false },
    { id: "products", label: "Monthly product updates", checked: false },
    { id: "subscribe", label: "Subscribe to newsletter", checked: true },
    { id: "receive", label: "Receive mails weekly", checked: true },
  ],
};

const PlatformSetCard = () => {
  const theme = useTheme();
  const [settings, setSettings] = useState<Settings>(INITIAL_SETTINGS);

  const handleToggle = (category: keyof Settings, id: string) => {
    setSettings((prev) => ({
      ...prev,
      [category]: prev[category].map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      ),
    }));
    // Tu môžeš pridať API call na uloženie nastavení
    // Príklad: await saveSettings(updatedSettings);
  };

  const renderSettingGroup = (
    title: string,
    items: SettingItem[],
    category: keyof Settings
  ) => (
    <Stack spacing={2}>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: 12,
          color: theme.palette.text.secondary,
          textTransform: "uppercase",
          letterSpacing: "0.5px",
        }}
      >
        {title}
      </Typography>

      <FormGroup>
        {items.map((item) => (
          <FormControlLabel
            key={item.id}
            control={
              <Switch
                checked={item.checked}
                onChange={() => handleToggle(category, item.id)}
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
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: 14,
                  color: theme.palette.text.secondary,
                }}
              >
                {item.label}
              </Typography>
            }
          />
        ))}
      </FormGroup>
    </Stack>
  );

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "20px",
        height: { xs: "auto", sm: 320, lg: 485 },
        background: theme.palette.card.overlay,
        backdropFilter: "blur(120px)",
      }}
    >
      <Stack alignItems="flex-start" sx={{ p: 2, pt: 3 }} spacing={3}>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: 18,
            color: theme.palette.text.primary,
          }}
        >
          Platform Settings
        </Typography>

        {renderSettingGroup("Account", settings.account, "account")}
        {renderSettingGroup("Application", settings.application, "application")}
      </Stack>
    </Card>
  );
};

export default PlatformSetCard;
