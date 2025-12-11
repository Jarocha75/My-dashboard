import { Grid } from "@mui/material";
import AnalyticsCard from "../components/AnalyticsCard";
import WelcomeCard from "../components/WelcomeCard";
import SatisfactionRateCard from "../components/SatisfactionRateCard";
import ReferralTrackingCard from "../components/ReferralTrackingCard";

const Dashboard = () => {
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
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <AnalyticsCard
          title="Today's Money"
          value="$53,000"
          change="+55%"
          icon="money"
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <AnalyticsCard
          title="Today's Users"
          value="2,300"
          change="+3%"
          icon="users"
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <AnalyticsCard
          title="New Clients"
          value="+3,462"
          change="-2%"
          icon="clients"
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <AnalyticsCard
          title="Sales"
          value="$103,430"
          change="+5%"
          icon="sales"
        />
      </Grid>

      <Grid size={{ xs: 12, md: 5 }}>
        <WelcomeCard />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <SatisfactionRateCard />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <ReferralTrackingCard />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
