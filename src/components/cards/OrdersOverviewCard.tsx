import { Card, List, Stack, Typography, useTheme } from "@mui/material";
import OrderRow, { type OrderType } from "../projects/OrderRow";
import { Bell, ShoppingCart, CreditCard, Package } from "lucide-react";

const orders: Array<{
  title: string;
  date: string;
  icon: typeof Bell;
  type: OrderType;
}> = [
  {
    title: "Design Changes",
    date: "Jan 9, 2014",
    icon: Bell,
    type: "design",
  },
  {
    title: "New Order #1832412",
    date: "Jan 7, 2014",
    icon: ShoppingCart,
    type: "order",
  },
  {
    title: "Server Payments for April",
    date: "July 20, 2014",
    icon: CreditCard,
    type: "payment",
  },
  {
    title: "New card added for order",
    date: "July 20, 2014",
    icon: CreditCard,
    type: "payment",
  },
  {
    title: "Unlock packages for development",
    date: "July 20, 2014",
    icon: Package,
    type: "system",
  },
  {
    title: "New order #1832412",
    date: "July 20, 2014",
    icon: ShoppingCart,
    type: "order",
  },
];

const OrdersOverviewCard = () => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        borderRadius: "28px",
        height: "100%",
        background: theme.palette.card.gradient,
        p: { xs: 2, md: 3 },
      }}
    >
      <Stack mb={3}>
        <Typography fontSize={18} fontWeight={700}>
          Orders Overview
        </Typography>
        <Typography fontSize={12} mt={0.5} color={"#38E68F"} fontWeight={500}>
          + 30% this month
        </Typography>
      </Stack>

      <List
        sx={{
          width: "100%",
          bgcolor: theme.palette.card.gradientOverlay,
          "& > li:not(:last-child)": {
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          },
        }}
      >
        {orders.map((order) => (
          <OrderRow
            key={order.title}
            title={order.title}
            date={order.date}
            icon={order.icon}
            type={order.type}
          />
        ))}
      </List>
    </Card>
  );
};

export default OrdersOverviewCard;
