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
      <Grid size={{ xs: 12, lg: 4 }}>
        <CreditCard />
      </Grid>
    </Grid>
  );
};

export default Billing;
