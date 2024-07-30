import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productIndex = state.items.findIndex(
        product => product.id === action.payload.id,
      );
      if (productIndex >= 0) {
        // Ürün zaten sepette, quantity artır.
        state.items[productIndex].quantity += 1;
      } else {
        // Ürün sepette değil, sepete ekle.
        state.items.push({...action.payload, quantity: 1});
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        product => product.id !== action.payload,
      );
    },
    incrementQuantity: (state, action) => {
      const productIndex = state.items.findIndex(
        product => product.id === action.payload,
      );
      if (productIndex >= 0) {
        state.items[productIndex].quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const productIndex = state.items.findIndex(
        product => product.id === action.payload,
      );
      if (productIndex >= 0 && state.items[productIndex].quantity > 1) {
        state.items[productIndex].quantity -= 1;
      }
    },
  },
});

export const {addToCart, removeFromCart, incrementQuantity, decrementQuantity} =
  cartReducer.actions;
export default cartReducer.reducer;
