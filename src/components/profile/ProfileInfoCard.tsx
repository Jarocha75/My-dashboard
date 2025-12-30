import { Card, IconButton, Stack, Typography, useTheme } from "@mui/material";

interface SocialMediaItem {
  name: string;
  icon: React.ReactNode;
  link: string;
}

interface Props {
  title?: string;
  fullName?: string;
  mobile?: string;
  email?: string;
  location?: string;
  socialMedia: SocialMediaItem[];
}

const ProfileInfoCard = ({
  title = "Profile Informations",
  fullName = "Mark Johnson",
  mobile = "+421 123 456 789",
  email = "mark.johnson@example.com",
  location = "Slovakia",
  socialMedia,
}: Props) => {
  const theme = useTheme();

  const profileData = [
    { label: "Full Name", value: fullName },
    { label: "Mobile", value: mobile },
    { label: "Email", value: email },
    { label: "Location", value: location },
  ];

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "20px",
        height: { xs: "auto", sm: 320, lg: 377 },
        background: theme.palette.card.overlay,
        backdropFilter: "blur(120px)",
      }}
    >
      <Stack alignItems="flex-start" sx={{ p: { xs: 2, sm: 0 } }}>
        <Typography
          sx={{
            fontSize: { xs: 14, lg: 18 },
            fontWeight: 700,
            pt: { xs: 1, sm: 2 },
            pl: { xs: 1, sm: 3 },
            color: theme.palette.text.primary,
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            position: "relative",
            fontWeight: 400,
            fontSize: { xs: 9, sm: 10 },
            p: { xs: 1, sm: 3 },
            pb: { xs: 2, sm: 4 },
            pl: { xs: 1, sm: 3 },
            color: theme.palette.text.secondary,
            lineHeight: 1.6,
            "&::after": {
              content: '""',
              position: "absolute",
              left: "10%",
              bottom: { xs: "8px", sm: "12px" },
              width: "80%",
              height: "1px",
              background:
                "linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, #E0E1E2 47.22%, rgba(224, 225, 226, 0.15625) 94.44%)",
            },
          }}
        >
          Hi, I'm Mark Johnson, Decisions: If you can't decide, the answer is
          <br />
          no. If two equally difficult paths, choose the one more painful in
          <br />
          the short term (pain avoidance is creating an illusion of equality).
        </Typography>

        <Stack alignItems="flex-start" pt={{ xs: 2, sm: 3 }} gap={{ xs: 1.5, sm: 2 }}>
          {profileData.map((item) => (
            <Typography key={item.label} sx={{ fontSize: { xs: 12, sm: 14 }, pl: { xs: 1, sm: 3 } }}>
              <Typography
                component="span"
                sx={{ color: theme.palette.text.secondary }}
              >
                {item.label}:{" "}
              </Typography>
              <Typography
                component="span"
                sx={{ color: theme.palette.text.primary }}
              >
                {item.value}
              </Typography>
            </Typography>
          ))}
          <Stack direction="row" alignItems="center" sx={{ pl: { xs: 1, sm: 3 }, pb: { xs: 1, sm: 0 } }}>
            <Typography
              component="span"
              sx={{ fontSize: { xs: 12, sm: 14 }, color: theme.palette.text.secondary }}
            >
              Social Media:{" "}
            </Typography>
            <Stack direction="row" gap={-1}>
              {socialMedia.map((social) => (
                <IconButton
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  sx={{
                    padding: { xs: 0.5, sm: 1 },
                    "& svg": {
                      fontSize: { xs: "1rem", sm: "1.25rem" },
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ProfileInfoCard;
