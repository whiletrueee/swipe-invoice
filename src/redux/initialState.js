import { generateInvoiceId } from "../utility";

export const listOfInvoices = [
  {
    invoiceHex: generateInvoiceId(),
    productItems: [],
    isOpen: false,
    currency: "$",
    currentDate: "",
    invoiceNumber: 1,
    dateOfIssue: "",
    billTo: "Harshit Singh",
    billToEmail: "harshitsingh3123@gmail.com",
    billToAddress: "Varansi, Uttar Pradesh",
    billFrom: "Batman Inc.",
    billFromEmail: "batman@gotham.com",
    billFromAddress: "Wayne Manor, Gotham City, USA",
    notes: "",
    total: "0.00",
    subTotal: "0.00",
    taxRate: "",
    taxAmount: "0.00",
    discountRate: "",
    discountAmount: "0.00",
  },
];
