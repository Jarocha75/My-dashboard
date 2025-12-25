import {
  Avatar,
  Box,
  Card,
  IconButton,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from "@mui/material";
import headerLogo from "@/assets/logos/headerLogo.svg";
import { Codepen, Pencil, Users, Wrench } from "lucide-react";
import { useState } from "react";

const ProfileHeader = () => {
  const theme = useTheme();
  const [tab, setTab] = useState(0);

  const tabSx = {
    minHeight: 32,
    minWidth: "auto",
    px: 1.5,
    py: 0.5,
    gap: 0.75,
    borderRadius: "10px",
    textTransform: "none",
    fontSize: 12,
    fontWeight: 600,
    color: "rgba(255,255,255,0.7)",

    "& .MuiTab-iconWrapper": {
      margin: 0,
    },

    "&.Mui-selected": {
      color: "#fff",
      background: theme.palette.primary.main,
      boxShadow: "0px 4px 12px rgba(0,0,0,0.25)",
    },
  };

  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        borderRadius: "20px",
        height: 129,
        px: 3,
        background: theme.palette.card.gradientOverlay,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Avatar
            src={headerLogo}
            alt="Profile Logo"
            variant="rounded"
            sx={{ width: 80, height: 80, borderRadius: "20px" }}
          />
          <IconButton
            size="small"
            sx={{
              position: "absolute",
              bottom: -4,
              right: -4,
              width: 26,
              height: 26,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.15)",
              background: theme.palette.card.gradient,
              boxShadow: "0px 2px 6px rgba(0,0,0,0.3)",
              "&:hover": {
                background: theme.palette.card.gradientOverlay,
              },
            }}
          >
            <Pencil fontSize={14} color="#fff" />
          </IconButton>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
          <Typography
            sx={{
              fontSize: 18,
              fontWeight: 700,
              color: theme.palette.text.primary,
            }}
          >
            Mark Johnson
          </Typography>
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 400,
              color: theme.palette.text.secondary,
            }}
          >
            marc@simple.com
          </Typography>
        </Box>
      </Box>

      <Box sx={{ ml: "auto" }}>
        <Tabs
          value={tab}
          onChange={(_, newValue) => setTab(newValue)}
          TabIndicatorProps={{ style: { display: "none" } }}
          sx={{
            minHeight: 0,
            "& .MuiTabs-flexContainer": {
              gap: 1,
            },
          }}
        >
          <Tab
            icon={<Codepen size={14} />}
            iconPosition="start"
            sx={tabSx}
            label="OVERVIEW"
          />
          <Tab
            icon={<Users size={14} />}
            iconPosition="start"
            sx={tabSx}
            label="TEAMS"
          />
          <Tab
            icon={<Wrench size={14} />}
            iconPosition="start"
            sx={tabSx}
            label="PROJECTS"
          />
        </Tabs>
      </Box>
    </Card>
  );
};

export default ProfileHeader;
