import { Card, Stack, Typography, useTheme } from "@mui/material";
import { Smile } from "lucide-react";
import ArcProgress from "../common/ArcProgress";
import {
  cardStyles,
  typographyStyles,
  borderRadius,
  mergeSx,
} from "@/styles/commonStyles";

const SatisfactionRateCard = () => {
  const theme = useTheme();

  return (
    <Card
      sx={mergeSx(cardStyles.basicCard(theme), {
        height: 340,
        p: 3,
        display: "flex",
        flexDirection: "column",
      })}
    >
      <Stack>
        <Typography sx={typographyStyles.cardTitle(theme)}>
          Satisfaction Rate
        </Typography>
        <Typography sx={{ fontSize: 12, color: "#A0AEC0", mt: 0.5 }}>
          From all projects
        </Typography>
      </Stack>

      <Stack mt={3} alignItems={"center"} gap={2}>
        <Stack sx={{ position: "relative" }}>
          <ArcProgress
            value={95}
            size={180}
            thickness={10}
            startAngle={270}
            endAngle={450}
            clip="top"
            gradientId="satisfactionGradient"
            gradientStart="#3A7BFF"
            gradientEnd="#00E1FF"
          />

          <Stack
            sx={{
              position: "absolute",
              top: "70%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 10,
            }}
          >
            <Smile size={40} />
          </Stack>
        </Stack>

        <Stack
          direction="row"
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{
            background: theme.palette.card.overlay,
            borderRadius: borderRadius.large,
            py: 1.2,
            px: 2,
            width: "90%",
          }}
        >
          <Typography sx={{ fontSize: 12, color: "#A0AEC0" }}>0%</Typography>

          <Stack alignItems={"center"}>
            <Typography color="white" fontSize={26} fontWeight={700}>
              95%
            </Typography>
            <Typography sx={{ fontSize: 12, color: "#A0AEC0" }}>
              Based on likes
            </Typography>
          </Stack>

          <Typography sx={{ fontSize: 12, color: "#A0AEC0" }}>100%</Typography>
        </Stack>
      </Stack>
    </Card>
  );
};

export default SatisfactionRateCard;
