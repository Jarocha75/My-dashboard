import CreditBalanceCard from "@/components/billing/CreditBalanceCard";
import CreditCard from "@/components/billing/CreditCard";
import { Grid } from "@mui/material";

const Billing = () => {
  return (
    <Grid
      container
      spacing={3}
      sx={{
        overflow: "hidden",
        width: "100%",
        m: 0,
      }}
    >
      <Grid size={{ xs: 12, md: 4, lg: 3 }}>
        <CreditCard />
      </Grid>

      <Grid size={{ xs: 12, md: 4, lg: 3 }}>
        <CreditBalanceCard />
      </Grid>
    </Grid>
  );
};

export default Billing;
