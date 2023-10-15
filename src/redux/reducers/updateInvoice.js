import { invoiceDataState } from "../initialState";

export default function updateInvoiceReducer(state = invoiceDataState, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.payload.name]: action.payload.value };

    case "ADD_ITEM":
      // Assuming a simple item is added for demonstration
      let id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
      return {
        ...state,
        productItems: [
          ...state.productItems,
          {
            id: id,
            name: "",
            price: "1.00",
            description: "",
            quantity: 1,
          },
        ],
      };

    case "DELETE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };

    case "EDIT_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, [action.payload.name]: action.payload.value }
            : item
        ),
      };

    case "CALCULATE_TOTAL":
      let subTotal = 0;
      state.productItems.map((items) => {
        subTotal = parseFloat(
          subTotal +
            parseFloat(items.price).toFixed(2) * parseInt(items.quantity)
        ).toFixed(2);
      });

      return {
        ...state,
        subTotal: parseFloat(subTotal).toFixed(2),
        total: parseFloat(
          subTotal +
            subTotal * (parseFloat(state.taxRate) / 100) -
            subTotal * (parseFloat(state.discountRate) / 100)
        ).toFixed(2),
        taxAmmount: parseFloat(
          subTotal * (parseFloat(state.taxRate) / 100)
        ).toFixed(2),
        discountAmmount: parseFloat(
          subTotal * (parseFloat(state.discountRate) / 100)
        ).toFixed(2),
      };

    default:
      return state;
  }
}
