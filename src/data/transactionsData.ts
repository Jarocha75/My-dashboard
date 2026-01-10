export type TransactionType = "charge" | "deposit" | "pending";

export interface Transaction {
  id: string;
  name: string;
  date: string;
  amount: number;
  type: TransactionType;
}

export const transactionsData: Transaction[] = [
  {
    id: "1",
    name: "Netflix",
    date: "27 March 2020, at 12:30 PM",
    amount: -2500,
    type: "charge",
  },
  {
    id: "2",
    name: "Apple",
    date: "27 March 2020, at 12:30 PM",
    amount: 2500,
    type: "deposit",
  },
  {
    id: "3",
    name: "Stripe",
    date: "26 March 2020, at 13:45 PM",
    amount: 800,
    type: "deposit",
  },
  {
    id: "4",
    name: "HubSpot",
    date: "26 March 2020, at 12:30 PM",
    amount: 1700,
    type: "deposit",
  },
  {
    id: "5",
    name: "Webflow",
    date: "26 March 2020, at 05:00 AM",
    amount: 0,
    type: "pending",
  },
  {
    id: "6",
    name: "Microsoft",
    date: "25 March 2020, at 16:30 PM",
    amount: -987,
    type: "charge",
  },
];
