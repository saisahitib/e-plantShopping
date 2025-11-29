import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const { name, cost } = action.payload;
        const plant = state.items.find(plant => {
            return plant.name === name;
        })
        if (plant) {
            plant.quantity++;
        } else state.items.push({ name, cost, quantity: 1})
    },
    removeItem: (state, action) => {
        const { name } = action.payload;
        state.items = state.items.filter(item => item.name !== name);
    },
    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload;
        const plant = state.items.find(plant => {
            return plant.name === name;
        })
        if (plant) plant.quantity = quantity;
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
