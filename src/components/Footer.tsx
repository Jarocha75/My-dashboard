import { Stack, Typography, useTheme } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const items = ["Marketplace", "Blog", "License"];

const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      justifyContent="space-between"
      alignItems={{ xs: "flex-start", md: "center" }}
      spacing={2}
      sx={{
        py: 2,
        backgroundColor: theme.palette.card.gradientOverlay,
      }}
    >
      <Typography variant="body1">
        &copy; {currentYear} My dashboard. Made with ❤️ by Jaroslav Pecha for a
        better web.
      </Typography>

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 1, md: 4 }}
        alignItems="center"
        sx={{ width: { xs: "100%", md: "auto" } }}
      >
        {items.map((item) => (
          <Typography
            key={item}
            component={RouterLink}
            to="/"
            fontSize={14}
            color={theme.palette.text.primary}
            sx={{
              textDecoration: "none",
              transition: "color 0.2s ease",
              "&:hover": {
                color: theme.palette.text.primary,
              },
            }}
          >
            {item}
          </Typography>
        ))}
      </Stack>
    </Stack>
  );
};

export default Footer;
