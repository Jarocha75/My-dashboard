import {
  Box,
  Button,
  Card,
  Divider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import {
  cardStyles,
  typographyStyles,
  containerStyles,
  mergeSx,
} from "@/styles/commonStyles";
import { type Invoice, invoicesData } from "@/data/invoicesData";

interface Props {
  invoices?: Invoice[];
  className: string;
}

const InvoicesCard = ({ invoices = invoicesData, className }: Props) => {
  const theme = useTheme();

  return (
    <Card
      className={className}
      sx={mergeSx(cardStyles.glassCard(theme), {
        p: { xs: 2, md: 2.5 },
        height: "100%",
        minHeight: { xs: 400, lg: 436 },
      })}
    >
      <Stack spacing={{ xs: 1.5, md: 2 }}>
        {/* Header */}
        <Box sx={containerStyles.flexBetween()}>
          <Typography sx={typographyStyles.cardTitle(theme)}>
            Invoices
          </Typography>
          <Button
            variant="contained"
            size="small"
            sx={{
              background: "linear-gradient(135deg, #5E8EFF 0%, #3d5afe 100%)",
              borderRadius: "8px",
              textTransform: "uppercase",
              fontSize: { xs: 10, md: 11 },
              fontWeight: 700,
              px: { xs: 2, md: 2.5 },
              py: { xs: 0.75, md: 1 },
              boxShadow: "0 4px 12px rgba(94, 142, 255, 0.3)",
              "&:hover": {
                background: "linear-gradient(135deg, #4a7fee 0%, #2d4fcc 100%)",
                boxShadow: "0 6px 16px rgba(94, 142, 255, 0.4)",
              },
            }}
          >
            View All
          </Button>
        </Box>

        <Stack spacing={0}>
          {invoices.map((invoice, index) => (
            <Box key={index}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                spacing={2}
                sx={{
                  py: { xs: 1.5, md: 1.75 },
                }}
              >
                <Stack spacing={0.5} flex={1}>
                  <Typography
                    sx={mergeSx(typographyStyles.bodyPrimary(theme), {
                      fontWeight: 500,
                    })}
                  >
                    {invoice.date}
                  </Typography>
                  <Typography
                    sx={mergeSx(typographyStyles.bodySecondary(theme), {
                      fontSize: { xs: 11, md: 13 },
                    })}
                  >
                    {invoice.invoiceNumber}
                  </Typography>
                </Stack>

                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={{ xs: 1.5, md: 2 }}
                  sx={{ flexShrink: 0 }}
                >
                  <Typography
                    sx={mergeSx(typographyStyles.smallValue(theme), {
                      fontSize: { xs: 14, md: 15 },
                    })}
                  >
                    {invoice.amount}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      color: theme.palette.text.secondary,
                      cursor: "pointer",
                      "&:hover": {
                        color: theme.palette.text.primary,
                      },
                    }}
                  >
                    <PictureAsPdfIcon sx={{ fontSize: { xs: 16, md: 18 } }} />
                    <Typography
                      sx={{
                        fontSize: { xs: 11, md: 12 },
                        fontWeight: 500,
                        textTransform: "uppercase",
                      }}
                    >
                      PDF
                    </Typography>
                  </Box>
                </Stack>
              </Stack>

              {index < invoices.length - 1 && (
                <Divider
                  sx={{
                    borderColor: "rgba(255, 255, 255, 0.08)",
                    opacity: 0.6,
                  }}
                />
              )}
            </Box>
          ))}
        </Stack>
      </Stack>
    </Card>
  );
};

export default InvoicesCard;
