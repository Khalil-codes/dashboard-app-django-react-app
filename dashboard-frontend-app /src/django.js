import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useAxios from './api';
import { saveProducts } from './redux/productsSlice';

export const useDjango = () => {
    const dispatch = useDispatch();
    const api = useAxios();
    useEffect(() => {
        const getProducts = async () => {
            const { data } = await api.get('products');
            console.log(data);
            dispatch(saveProducts(data));
        };
        getProducts();
    }, [dispatch]);
    const products = useSelector((state) => state.products);
    return products;
};
