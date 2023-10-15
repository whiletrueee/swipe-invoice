import { configureStore } from "@reduxjs/toolkit";
import updateInvoiceReducer from "./reducers/updateInvoice";

const store = configureStore({
  reducer: {
    updateForm: updateInvoiceReducer,
  },
});

export default store;
