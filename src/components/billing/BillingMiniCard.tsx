import {
  cardStyles,
  mergeSx,
  spacing,
  typographyStyles,
} from "@/styles/commonStyles";
import { Card, IconButton, Stack, Typography, useTheme } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import type { Billing } from "@/data/billingData";

interface Props {
  billing: Billing;
}

const BillingMiniCard = ({ billing }: Props) => {
  const theme = useTheme();

  const handleDelete = () => {
    console.log("Delete billing:", billing.id);
  };

  const handleEdit = () => {
    console.log("Edit billing:", billing.id);
  };

  return (
    <Card
      sx={mergeSx(cardStyles.glassCard(theme), {
        p: spacing.cardPadding,
        height: 132,
      })}
    >
      <Stack spacing={2}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack spacing={0.5}>
            <Typography sx={typographyStyles.bodyPrimary(theme)}>
              {billing.fullName}
            </Typography>
            <Typography
              sx={mergeSx(typographyStyles.bodySecondary(theme), {
                fontSize: { xs: 11, md: 12 },
              })}
            >
              {billing.company}
            </Typography>
            <Typography
              sx={mergeSx(typographyStyles.bodySecondary(theme), {
                fontSize: { xs: 11, md: 12 },
              })}
            >
              {billing.email}
            </Typography>
            <Typography
              sx={mergeSx(typographyStyles.bodySecondary(theme), {
                fontSize: { xs: 11, md: 12 },
              })}
            >
              {billing.vatNumber}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={0.5} alignItems="center">
            <IconButton
              size="small"
              onClick={handleDelete}
              sx={{
                color: theme.palette.error.main,
                "&:hover": {
                  color: theme.palette.error.dark,
                  background: "rgba(244, 67, 54, 0.1)",
                },
              }}
            >
              <DeleteIcon sx={{ fontSize: { xs: 16, md: 18 } }} />
            </IconButton>
            <Typography
              onClick={handleDelete}
              sx={mergeSx(typographyStyles.cardLabel(theme), {
                color: theme.palette.error.main,
                cursor: "pointer",
                "&:hover": {
                  color: theme.palette.error.dark,
                },
              })}
            >
              Delete
            </Typography>

            <IconButton
              size="small"
              onClick={handleEdit}
              sx={{
                color: theme.palette.text.secondary,
                "&:hover": {
                  color: theme.palette.primary.main,
                  background: "rgba(94, 142, 255, 0.1)",
                },
              }}
            >
              <EditIcon sx={{ fontSize: { xs: 16, md: 18 } }} />
            </IconButton>
            <Typography
              onClick={handleEdit}
              sx={mergeSx(typographyStyles.cardLabel(theme), {
                cursor: "pointer",
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              })}
            >
              Edit
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
};

export default BillingMiniCard;
