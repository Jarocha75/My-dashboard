export interface Invoice {
  date: string;
  invoiceNumber: string;
  amount: string;
}

export const invoicesData: Invoice[] = [
  {
    date: "March, 01, 2020",
    invoiceNumber: "#MS-415646",
    amount: "$180",
  },
  {
    date: "February, 10, 2021",
    invoiceNumber: "#RV-126749",
    amount: "$250",
  },
  {
    date: "April, 05, 2020",
    invoiceNumber: "#FB-212562",
    amount: "$560",
  },
  {
    date: "June, 25, 2019",
    invoiceNumber: "#QW-103578",
    amount: "$120",
  },
  {
    date: "March, 01, 2019",
    invoiceNumber: "#AR-803481",
    amount: "$300",
  },
];
