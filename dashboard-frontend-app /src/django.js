import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from './api';
import { saveProducts } from './redux/productsSlice';

export const useDjango = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const getProducts = async () => {
            const { data } = await fetchAllProducts();
            console.log(data);
            dispatch(saveProducts(data));
        };
        getProducts();
    }, [dispatch]);
    const products = useSelector((state) => state.products);
    return products;
};
