import { Card, Typography, useTheme, Box } from "@mui/material";
import SalesOverviewChart from "../common/SalesOverviewChart";
import {
  cardStyles,
  typographyStyles,
  mergeSx,
} from "@/styles/commonStyles";

const SalesOverviewCard = () => {
  const theme = useTheme();

  return (
    <Card
      sx={mergeSx(cardStyles.basicCard(theme), {
        minHeight: 445,
        p: 3,
        display: "flex",
        flexDirection: "column",
      })}
    >
      <Typography sx={typographyStyles.cardTitle(theme)}>
        Sales overview
      </Typography>

      <Typography
        sx={{
          fontSize: 12,
          mt: 0.5,
          color: "#38E68F",
          fontWeight: 500,
        }}
      >
        (+5) more in 2021
      </Typography>

      <Box mt={3} minHeight={320}>
        <SalesOverviewChart />
      </Box>
    </Card>
  );
};

export default SalesOverviewCard;
