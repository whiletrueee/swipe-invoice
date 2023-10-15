import { configureStore } from "@reduxjs/toolkit";
import invoiceListSlice from "./reducers/updateInvoiceList";

const store = configureStore({
  reducer: {
    invoiceList: invoiceListSlice,
  },
});

export default store;
