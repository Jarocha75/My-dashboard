import { Box, Card, Stack, Typography } from "@mui/material";
import ImageWelcome from "@/assets/image/ImageWelcome02.png";

interface Props {
  userName?: string;
  title?: string;
  actionText?: string;
  backgroundImage?: string;
  onActionClick?: () => void;
}

const WelcomeBackCard = ({
  userName = "Mark Johnson",
  title = "Welcome back!",
  actionText = "Turn on your car",
  backgroundImage = ImageWelcome,
  onActionClick,
}: Props) => {
  return (
    <Card
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "28px",
        height: 377,
        background: `url(${backgroundImage})`,
      }}
    >
      <Stack
        sx={{
          height: "100%",
          justifyContent: "space-between",
          p: 3,
        }}
      >
        <Box>
          <Typography
            sx={{ fontSize: 30, fontWeight: 700, mb: 1, color: "white" }}
          >
            {title}
          </Typography>
          <Typography sx={{ fontSize: 14, fontWeight: 400, color: "white" }}>
            Nice to see you,{userName}!
          </Typography>
        </Box>

        <Box
          onClick={onActionClick}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            cursor: "pointer",
            opacity: 0.85,
            "&:hover": { opacity: 1 },
          }}
        >
          <Typography sx={{ fontSize: 12, fontWeight: 400, color: "white" }}>
            {actionText}
          </Typography>

          <Box
            sx={{
              width: 18,
              height: 18,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
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
      </Stack>
    </Card>
  );
};

export default WelcomeBackCard;
