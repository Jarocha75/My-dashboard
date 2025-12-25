import ProfileHeader from "@/components/profile/ProfileHeader";
import { Grid } from "@mui/material";

const Profile = () => {
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
    </Grid>
  );
};

export default Profile;
