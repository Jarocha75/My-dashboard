import CreditBalanceCard from "@/components/billing/CreditBalanceCard";
import CreditCard from "@/components/billing/CreditCard";
import InvoicesCard from "@/components/billing/InvoicesCard";
import PaymentMethodCard from "@/components/billing/PaymentMethodCard";
import styles from "@/pages/billing/Billing.module.css";
import { Box } from "@mui/material";

const Billing = () => {
  return (
    <Box className={styles.grid}>
      <CreditCard className={styles.creditCard} />
      <CreditBalanceCard className={styles.creditBalance} />
      <InvoicesCard className={styles.invoices} />
      <PaymentMethodCard className={styles.paymentMethod} />
    </Box>
  );
};

export default Billing;
