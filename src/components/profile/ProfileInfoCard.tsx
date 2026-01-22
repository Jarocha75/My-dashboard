import { Card, Stack, Typography, useTheme } from "@mui/material";
import SocialMediaLink, { type SocialMediaItem } from "./SocialMediaLink";
import { useUserProfile } from "@/hooks/profile/useUserProfile";

interface Props {
  title?: string;
  bio?: string;
  fullName?: string;
  mobile?: string;
  email?: string;
  location?: string;
  socialMedia: SocialMediaItem[];
}

const ProfileInfoCard = ({
  title = "Profile Informations",
  socialMedia,
}: Props) => {
  const theme = useTheme();
  const { data: profile } = useUserProfile();
  const fullName = profile?.name || profile?.displayName || "User";
  const mobile = profile?.phoneNumber || "";
  const email = profile?.email || "";
  const location = profile?.location || "";
  const bio = profile?.bio || "Default bio text...";

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
          {bio}
        </Typography>

        <Stack
          alignItems="flex-start"
          pt={{ xs: 2, sm: 3 }}
          gap={{ xs: 1.5, sm: 2 }}
        >
          {profileData.map((item) => (
            <Typography
              key={item.label}
              sx={{ fontSize: { xs: 12, sm: 14 }, pl: { xs: 1, sm: 3 } }}
            >
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
          <SocialMediaLink items={socialMedia} />
        </Stack>
      </Stack>
    </Card>
  );
};

export default ProfileInfoCard;
