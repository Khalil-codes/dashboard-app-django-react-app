import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import productsReducer from './productsSlice';
export default configureStore({
    reducer: { user: authReducer, products: productsReducer },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});
