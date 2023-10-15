import { configureStore } from "@reduxjs/toolkit";
import invoiceSlice from "./reducers/updateInvoice";

const store = configureStore({
  reducer: {
    invoice: invoiceSlice,
  },
});

export default store;
