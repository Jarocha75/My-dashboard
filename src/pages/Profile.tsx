import CarInfoCard from "@/components/profile/CarInfoCard";
import ProfileHeader from "@/components/profile/ProfileHeader";
import WelcomeBackCard from "@/components/profile/WelcomeBackCard";
import { Grid } from "@mui/material";
import IconBattery01 from "@/assets/icons/IconBattery01.png";
import IconCar from "@/assets/icons/IconCar.png";
import LineChart01 from "@/assets/charts/LineChart01.png";
import LineChart02 from "@/assets/charts/LineChart02.png";

const Profile = () => {
  const miniCardsData = [
    {
      title: "Battery Health",
      value: "92%",
      icon: IconBattery01,
    },
    {
      title: "Car Status",
      value: "Active",
      icon: IconCar,
    },
    {
      title: "Energy Usage",
      value: "45 kWh",
      icon: LineChart01,
    },
    {
      title: "Performance",
      value: "Optimal",
      icon: LineChart02,
    },
  ];
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
      <Grid size={{ xs: 12, lg: 12 }}>
        <ProfileHeader />
      </Grid>

      <Grid size={{ xs: 12, lg: 3 }}>
        <WelcomeBackCard />
      </Grid>

      <Grid size={{ xs: 12, lg: 6 }}>
        <CarInfoCard miniCards={miniCardsData} />
      </Grid>
    </Grid>
  );
};

export default Profile;
