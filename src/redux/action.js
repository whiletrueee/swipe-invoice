// actions.js
export const updateField = (name, value) => ({
    type: 'UPDATE_FIELD',
    payload: { name, value },
  });
  
  export const addItem = () => ({
    type: 'ADD_ITEM',
  });
  
  export const deleteItem = (id) => ({
    type: 'DELETE_ITEM',
    payload: { id },
  });
  
  export const editItem = (id, name, value) => ({
    type: 'EDIT_ITEM',
    payload: { id, name, value },
  });
  
  export const calculateTotal = () => ({
    type: 'CALCULATE_TOTAL',
  });
  