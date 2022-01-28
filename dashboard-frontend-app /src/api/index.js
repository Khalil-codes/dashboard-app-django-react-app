import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8000/api/' });

export const fetchAllProducts = () => API.get('products');
export const fetchProduct = (id) => API.get(`product/${id}`);
export const createProduct = (product) => API.post('product/create', product);
export const updateProduct = (id, data) =>
    API.put(`/product/${id}/update`, data);
export const deleteProduct = (id) => API.delete(`product/${id}/delete`);
