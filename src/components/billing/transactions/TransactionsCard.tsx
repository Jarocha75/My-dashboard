import { Card, Stack, Typography, List, Box, useTheme } from "@mui/material";
import { Calendar } from "lucide-react";
import { transactionsData } from "../../../data/transactionsData";
import { TransactionRow } from "./TransactionRow";
import {
  cardStyles,
  typographyStyles,
  spacing,
  mergeSx,
} from "../../../styles/commonStyles";

interface Props {
  title?: string;
  dateRange?: string;
  className?: string;
}

const TransactionsCard = ({
  title = "Your Transactions",
  dateRange = "23 - 30 March 2020",
  className,
}: Props) => {
  const theme = useTheme();

  const groupedTransactions = [
    {
      label: "NEWEST",
      items: transactionsData.slice(0, 2),
    },
    {
      label: "YESTERDAY",
      items: transactionsData.slice(2),
    },
  ];

  return (
    <Card
      className={className}
      sx={mergeSx(cardStyles.basicCard(theme), {
        p: spacing.cardPadding,
        height: "100%",
      })}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography sx={typographyStyles.cardTitle(theme)}>{title}</Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Calendar size={16} color="#A0AEC0" />
          <Typography
            sx={{
              ...typographyStyles.bodySecondary(theme),
              fontSize: "0.875rem",
            }}
          >
            {dateRange}
          </Typography>
        </Stack>
      </Stack>

      <Box sx={{ overflowY: "auto", maxHeight: "calc(100% - 60px)" }}>
        {groupedTransactions.map((group, index) => (
          <Box key={group.label} sx={{ mb: index === 0 ? 3 : 0 }}>
            <Typography
              sx={{
                ...typographyStyles.bodySecondary(theme),
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.5px",
                mb: 1,
                color: "#A0AEC0",
              }}
            >
              {group.label}
            </Typography>

            <List sx={{ py: 0 }}>
              {group.items.map((transaction) => (
                <TransactionRow key={transaction.id} {...transaction} />
              ))}
            </List>
          </Box>
        ))}
      </Box>
    </Card>
  );
};

export default TransactionsCard;
