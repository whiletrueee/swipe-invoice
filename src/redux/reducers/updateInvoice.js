import { createSlice } from "@reduxjs/toolkit";
import { invoiceDataState } from "../initialState";

const invoiceSlice = createSlice({
  name: "invoice",
  initialState: invoiceDataState,
  reducers: {
    updateField: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    addItem: (state) => {
      const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(
        36
      );
      state.productItems.push({
        id,
        name: "",
        price: "1.00",
        description: "",
        quantity: 1,
      });
    },
    deleteItem: (state, action) => {
      const index = state.productItems.indexOf(action.payload.id);
      state.productItems.splice(index, 1);
    },
    editItem: (state, action) => {
      state.productItems = state.productItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, [action.payload.name]: action.payload.value }
          : item
      );
    },
    calculateTotal: (state) => {
      const subTotal = state.productItems
        .reduce((total, item) => {
          return total + parseFloat(item.price) * parseInt(item.quantity);
        }, 0)
        .toFixed(2);

      const taxAmount = (parseFloat(subTotal) * (state.taxRate / 100)).toFixed(
        2
      );
      const discountAmount = (
        parseFloat(subTotal) *
        (state.discountRate / 100)
      ).toFixed(2);

      const total = (
        parseFloat(subTotal) -
        discountAmount +
        parseFloat(taxAmount)
      ).toFixed(2);

      return {
        ...state,
        subTotal,
        taxAmount,
        discountAmount,
        total,
      };
    },
  },
});

export const { updateField, addItem, deleteItem, editItem, calculateTotal } =
  invoiceSlice.actions;
export default invoiceSlice.reducer;
