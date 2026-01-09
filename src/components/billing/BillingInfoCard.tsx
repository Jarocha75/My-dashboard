import {
  cardStyles,
  mergeSx,
  spacing,
  typographyStyles,
} from "@/styles/commonStyles";
import {
  Alert,
  Card,
  CircularProgress,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import BillingMiniCard from "./BillingMiniCard";
import { type Billing } from "@/data/billingData";
import useBillings from "@/hooks/useBillings";

const BILLING_CONTENT = {
  title: "Billing Information",
};

interface Props {
  className: string;
}

const BillingInfoCard = ({ className }: Props) => {
  const theme = useTheme();
  const { data: billings, isLoading, isError } = useBillings();

  const handleEditClick = (billing: Billing) => {
    console.log("Edit Billing", billing);
  };

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

      {isLoading && (
        <Stack alignItems="center" sx={{ mt: 4 }}>
          <CircularProgress />
        </Stack>
      )}

      {isError && (
        <Alert severity="error" sx={{ mt: 2 }}>
          Chyba pri načítaní dát.
        </Alert>
      )}

      {!isLoading && !isError && billings && billings.length === 0 && (
        <Typography
          sx={mergeSx(typographyStyles.bodySecondary(theme), {
            mt: 2,
            textAlign: "center",
          })}
        >
          Žiadne billing informácie.
        </Typography>
      )}

      {!isLoading && !isError && billings && billings.length > 0 && (
        <Stack spacing={2} sx={{ mt: 2 }}>
          {billings.map((billing) => (
            <BillingMiniCard
              key={billing.id}
              billing={billing}
              onEditClick={handleEditClick}
            />
          ))}
        </Stack>
      )}
    </Card>
  );
};

export default BillingInfoCard;
