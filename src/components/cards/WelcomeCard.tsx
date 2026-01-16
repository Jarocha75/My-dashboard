import { Box, Card, Typography, useTheme } from "@mui/material";
import welcomeImg from "@/assets/image/picture01.jpg";
import {
  borderRadius,
  containerStyles,
  heights,
  hoverEffects,
  mergeSx,
  spacing,
  typographyStyles,
} from "@/styles/commonStyles";
import { useUserProfile } from "@/hooks/useUserProfile";

const CARD_CONTENT = {
  title: "Welcome back",
  text: "Tap to record",
};

const WelcomeCard = () => {
  const theme = useTheme();
  const { data: profile } = useUserProfile();
  const name = profile?.name || profile?.displayName || "User";

  return (
    <Card
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: borderRadius.xLarge,
        height: heights.mediumCard,
        background: "transparent",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          left: "0",
          width: "120%",
          height: "120%",
          backgroundImage: `url(${welcomeImg})`,
          backgroundSize: "160%",
          backgroundPosition: "center",
          transform: "scaleX(-1)",
          filter: "brightness(1.4) contrast(1.1) saturate(1.1)",
          zIndex: 1,
        }}
      />

      <Box sx={containerStyles.overlay(theme)} />

      <Box
        sx={{
          position: "relative",
          zIndex: 3,
          color: "white",
          height: "100%",
          p: spacing.cardPadding,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <Typography
          sx={mergeSx(typographyStyles.bodySecondary(theme), { mb: 1 })}
        >
          {CARD_CONTENT.title}
        </Typography>

        <Typography sx={typographyStyles.valueDisplay(theme)}>
          {name}
        </Typography>

        <Typography
          sx={mergeSx(typographyStyles.bodyPrimary(theme), { mt: 3 })}
        >
          Glad to see you again!
          <br /> Ask me anything.
        </Typography>

        <Box
          sx={mergeSx(
            containerStyles.flexCenter(),
            {
              justifyContent: "flex-start",
              gap: spacing.responsiveGap,
              mt: "auto",
              cursor: "pointer",
            },
            hoverEffects.opacity()
          )}
        >
          <Typography sx={typographyStyles.cardLabel(theme)}>
            {CARD_CONTENT.text}
          </Typography>

          <Box
            sx={mergeSx(containerStyles.flexCenter(), {
              width: 18,
              height: 18,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.15)",
            })}
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default WelcomeCard;
