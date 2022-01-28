import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        saveProducts: (state, action) => {
            return [...action.payload];
        },
        deleteProduct: (state, action) => {
            return state.filter((s) => s.id !== action.payload);
        },
        editProduct: (state, action) => {
            const idx = state.findIndex((s) => s.id === action.payload.id);
            state[idx] = { ...action.payload.updatedDataFields };
        },
        addProduct: (state, action) => {
            return [...state, action.payload];
        },
    },
});

export const { saveProducts, deleteProduct, editProduct, addProduct } =
    productsSlice.actions;

export default productsSlice.reducer;
