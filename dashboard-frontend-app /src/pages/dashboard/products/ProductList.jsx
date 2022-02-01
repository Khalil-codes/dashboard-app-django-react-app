import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline, EditOutlined } from '@mui/icons-material';
import styles from './Products.module.css';
import { useDispatch } from 'react-redux';
import { useDjango } from '../../../django';
import { deleteProduct } from '../../../redux/productsSlice';
import useAxios from '../../../api';
const ProductList = ({ setSelectedProductToEdit, setFormOpen }) => {
    const products = useDjango();
    const dispatch = useDispatch();
    const api = useAxios();

    const handleDelete = async (id) => {
        try {
            const { status } = await api.delete(`product/${id}/delete`);
            if (status === 200) dispatch(deleteProduct(id));
        } catch (error) {
            console.log(error, error.message);
        }
    };
    const handleEdit = (id) => {
        setSelectedProductToEdit(products.find((p) => p.id === id));
        setFormOpen(true);
    };
    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            minWidth: 100,
        },
        { field: 'name', headerName: 'Name', minWidth: 400 },
        {
            field: 'price',
            headerName: 'Price',
            minWidth: 200,
            renderCell: (params) => `$ ${params.row.price}`,
        },
        { field: 'stock', headerName: 'Stock', minWidth: 200 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 100,
            sortable: false,
            renderCell: (params) => {
                return (
                    <div className={styles.actionBtn}>
                        <small
                            className={styles.deleteIcon}
                            onClick={() => handleDelete(params.id)}>
                            <DeleteOutline color="error" />
                        </small>
                        <small
                            className={styles.editIcon}
                            onClick={() => handleEdit(params.id)}>
                            <EditOutlined color="warning" />
                        </small>
                    </div>
                );
            },
        },
    ];
    const rows = [...products];
    return (
        <div
            style={{ height: '500px', width: '100%', backgroundColor: '#fff' }}>
            <DataGrid rows={rows} columns={columns} />
        </div>
    );
};

export default ProductList;
