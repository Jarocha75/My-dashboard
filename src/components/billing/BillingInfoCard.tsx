import {
  cardStyles,
  mergeSx,
  spacing,
  typographyStyles,
} from "@/styles/commonStyles";
import { Card, Stack, Typography, useTheme } from "@mui/material";
import BillingMiniCard from "./BillingMiniCard";
import { billingsData } from "@/data/billingData";

const BILLING_CONTENT = {
  title: "Billing Information",
};

interface Props {
  className: string;
}

const BillingInfoCard = ({ className }: Props) => {
  const theme = useTheme();

  return (
    <Card
      className={className}
      sx={mergeSx(cardStyles.glassCard(theme), {
        p: spacing.cardPadding,
        display: "flex",
        flexDirection: "column",
      })}
    >
      <Typography sx={typographyStyles.cardTitle(theme)}>
        {BILLING_CONTENT.title}
      </Typography>
      <Stack spacing={2} sx={{ mt: 2 }}>
        {billingsData.map((billing) => (
          <BillingMiniCard key={billing.id} billing={billing} />
        ))}
      </Stack>
    </Card>
  );
};

export default BillingInfoCard;
