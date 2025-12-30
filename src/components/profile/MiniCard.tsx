import { Box, Typography } from "@mui/material";

type MiniCardProps = {
  title: string;
  value: string;
  icon: React.ReactNode;
};

const MiniCard = ({ title, value, icon }: MiniCardProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: { sm: 220 },
        height: 84,
        py: 1.25,
        px: 1.75,
        borderRadius: "16px",
        background:
          "linear-gradient(135deg, rgba(6,11,38,0.94), rgba(26,31,55,0.94))",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 1.5,
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Typography fontSize={12} color="text.secondary" sx={{ mb: 0.5 }}>
          {title}
        </Typography>
        <Typography fontSize={20} fontWeight={700}>
          {value}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {icon}
      </Box>
    </Box>
  );
};

export default MiniCard;
