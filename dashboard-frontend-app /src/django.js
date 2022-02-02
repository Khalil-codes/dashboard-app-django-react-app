import jwtDecode from 'jwt-decode';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useAxios from './api';
import { saveUser, saveAuthTokens } from './redux/authSlice';
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

export const loginUser = async (username, password) => {
    const response = await fetch('http://localhost:8000/api/token/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password,
        }),
    });
    const data = await response.json();
    return { status: response.status, data };
};

// export const registerUser = async (
//     username,
//     email,
//     password1,
//     password2,
//     firstName,
//     lastName
// ) => {
//     const response = await fetch('http://localhost:8000/api/token/', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             username: username,
//             password1: password1,
//             password2,
//             email,
//             firstName,
//             lastName,
//         }),
//     });
//     const data = await response.json();
//     if (response.status === 200) {
//         const { status, data } = await loginUser(username, password1);
//         if (status === 200) {
//             return { status };
//         }
//     }
// };
