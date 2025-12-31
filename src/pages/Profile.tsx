import LineChart01 from "@/assets/charts/LineChart01.png";
import LineChart02 from "@/assets/charts/LineChart02.png";
import IconBattery01 from "@/assets/icons/IconBattery01.png";
import IconCar from "@/assets/icons/IconCar.png";
import CarInfoCard from "@/components/profile/CarInfoCard";
import PlatformSetCard from "@/components/profile/PlatformSetCard";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileInfoCard from "@/components/profile/ProfileInfoCard";
import WelcomeBackCard from "@/components/profile/WelcomeBackCard";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Grid } from "@mui/material";

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

  const socialMediaData = [
    {
      name: "Facebook",
      icon: <FacebookRoundedIcon />,
      link: "https://facebook.com/",
    },
    {
      name: "Twitter",
      icon: <TwitterIcon />,
      link: "https://twitter.com/",
    },
    {
      name: "Instagram",
      icon: <InstagramIcon />,
      link: "https://instagram.com/",
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
      <Grid size={{ xs: 12 }}>
        <ProfileHeader />
      </Grid>

      <Grid size={{ xs: 12, lg: 3 }}>
        <WelcomeBackCard />
      </Grid>

      <Grid size={{ xs: 12, lg: 6 }}>
        <CarInfoCard miniCards={miniCardsData} />
      </Grid>

      <Grid size={{ xs: 12, lg: 3 }}>
        <ProfileInfoCard socialMedia={socialMediaData} />
      </Grid>

      <Grid size={{ xs: 12, lg: 3 }}>
        <PlatformSetCard />
      </Grid>
    </Grid>
  );
};

export default Profile;
