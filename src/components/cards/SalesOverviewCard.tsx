import { Card, Typography, useTheme, Box } from "@mui/material";
import SalesOverviewChart from "../common/SalesOverviewChart";
import {
  cardStyles,
  typographyStyles,
  mergeSx,
} from "@/styles/commonStyles";

const CARD_CONTENT = {
  title: "Sales overview",
  subtitle: "(+5) more in 2021",
};

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
        {CARD_CONTENT.title}
      </Typography>

      <Typography
        sx={mergeSx(typographyStyles.bodySecondary(theme), {
          mt: 0.5,
          color: "#38E68F",
          fontWeight: 500,
        })}
      >
        {CARD_CONTENT.subtitle}
      </Typography>

      <Box mt={3} minHeight={320}>
        <SalesOverviewChart />
      </Box>
    </Card>
  );
};

export default SalesOverviewCard;
