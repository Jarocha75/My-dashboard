import {
  Box,
  Button,
  Card,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { cardStyles, typographyStyles, mergeSx } from "@/styles/commonStyles";

interface PaymentMethod {
  id: string;
  type: "mastercard" | "visa";
  cardNumber: string;
}

interface Props {
  paymentMethods?: PaymentMethod[];
  className: string;
}

const defaultPaymentMethods: PaymentMethod[] = [
  {
    id: "1",
    type: "mastercard",
    cardNumber: "7812 2139 0823 XXXX",
  },
  {
    id: "2",
    type: "visa",
    cardNumber: "7812 2139 0823 XXXX",
  },
];

const PaymentMethodCard = ({
  paymentMethods = defaultPaymentMethods,
  className,
}: Props) => {
  const theme = useTheme();

  const getCardIcon = (type: "mastercard" | "visa") => {
    if (type === "mastercard") {
      return (
        <Box
          sx={{
            width: 32,
            height: 32,
            borderRadius: "4px",
            background: "linear-gradient(135deg, #EB001B 0%, #F79E1B 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              width: 16,
              height: 16,
              borderRadius: "50%",
              background: "#EB001B",
              position: "absolute",
              left: 6,
            }}
          />
          <Box
            sx={{
              width: 16,
              height: 16,
              borderRadius: "50%",
              background: "#F79E1B",
              position: "absolute",
              right: 6,
            }}
          />
        </Box>
      );
    }

    return (
      <Box
        sx={{
          width: 32,
          height: 32,
          borderRadius: "4px",
          background: "linear-gradient(135deg, #1A1F71 0%, #0066B2 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontWeight: 700,
          fontSize: 12,
          fontStyle: "italic",
        }}
      >
        VISA
      </Box>
    );
  };

  return (
    <Card
      className={className}
      sx={mergeSx(cardStyles.glassCard(theme), {
        p: { xs: 2, md: 2.5 },
        minHeight: { xs: "auto", md: 172 },
      })}
    >
      <Stack spacing={{ xs: 2, md: 2.5 }}>
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start", sm: "center" },
            justifyContent: "space-between",
            gap: { xs: 1, sm: 0 },
          }}
        >
          <Typography sx={typographyStyles.cardTitle(theme)}>
            Payment Method
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
            Add a New Card
          </Button>
        </Box>

        {/* Payment Methods */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
            gap: { xs: 1.5, md: 2 },
          }}
        >
          {paymentMethods.map((method) => (
            <Box
              key={method.id}
              sx={{
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: "16px",
                p: { xs: 1.5, md: 2 },
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "rgba(255, 255, 255, 0.02)",
                backdropFilter: "blur(10px)",
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  background: "rgba(255, 255, 255, 0.05)",
                  borderColor: "rgba(255, 255, 255, 0.2)",
                },
              }}
            >
              <Stack direction="row" alignItems="center" spacing={1.5}>
                {getCardIcon(method.type)}
                <Typography
                  sx={mergeSx(typographyStyles.bodyPrimary(theme), {
                    fontWeight: 500,
                    fontSize: { xs: 12, md: 14 },
                    letterSpacing: "0.5px",
                  })}
                >
                  {method.cardNumber}
                </Typography>
              </Stack>

              <IconButton
                size="small"
                sx={{
                  color: theme.palette.text.secondary,
                  "&:hover": {
                    color: theme.palette.text.primary,
                    background: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                <EditIcon sx={{ fontSize: { xs: 16, md: 18 } }} />
              </IconButton>
            </Box>
          ))}
        </Box>
      </Stack>
    </Card>
  );
};

export default PaymentMethodCard;
