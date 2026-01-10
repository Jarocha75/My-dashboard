import { ListItem, Stack, Typography, Box, useTheme } from "@mui/material";
import { ArrowDown, ArrowUp, Clock } from "lucide-react";
import type {
  Transaction,
  TransactionType,
} from "../../../data/transactionsData";
import { typographyStyles } from "../../../styles/commonStyles";

interface TransactionRowProps extends Transaction {}

const getTransactionIcon = (type: TransactionType) => {
  switch (type) {
    case "charge":
      return ArrowDown;
    case "deposit":
      return ArrowUp;
    case "pending":
      return Clock;
  }
};

const getTransactionColor = (type: TransactionType) => {
  switch (type) {
    case "charge":
      return {
        color: "#F5365C",
        bg: "rgba(245, 54, 92, 0.15)",
      };
    case "deposit":
      return {
        color: "#5BE374",
        bg: "rgba(91, 227, 116, 0.15)",
      };
    case "pending":
      return {
        color: "#A0AEC0",
        bg: "rgba(160, 174, 192, 0.15)",
      };
  }
};

const formatAmount = (amount: number) => {
  if (amount === 0) return "Pending";
  const sign = amount > 0 ? "+" : "-";
  return `${sign}$${Math.abs(amount)}`;
};

const getAmountColor = (amount: number, type: TransactionType) => {
  if (type === "pending") return "#A0AEC0";
  return amount > 0 ? "#5BE374" : "#F5365C";
};

export const TransactionRow: React.FC<TransactionRowProps> = ({
  name,
  date,
  amount,
  type,
}) => {
  const theme = useTheme();
  const Icon = getTransactionIcon(type);
  const colorScheme = getTransactionColor(type);

  return (
    <ListItem
      sx={{
        px: 0,
        py: 2,
        borderBottom: `1px solid rgba(255, 255, 255, 0.05)`,
        "&:last-child": {
          borderBottom: "none",
        },
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <Box
            sx={{
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "12px",
              background: colorScheme.bg,
              color: colorScheme.color,
              flexShrink: 0,
            }}
          >
            <Icon size={18} />
          </Box>
          <Stack spacing={0.5}>
            <Typography
              sx={{
                ...typographyStyles.bodyPrimary(theme),
                fontWeight: 600,
              }}
            >
              {name}
            </Typography>
            <Typography
              sx={{
                ...typographyStyles.bodySecondary(theme),
                fontSize: "0.875rem",
              }}
            >
              {date}
            </Typography>
          </Stack>
        </Stack>

        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "1rem",
            color: getAmountColor(amount, type),
          }}
        >
          {formatAmount(amount)}
        </Typography>
      </Stack>
    </ListItem>
  );
};
