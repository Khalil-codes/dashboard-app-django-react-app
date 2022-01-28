import React, { useState } from 'react';
import Button from '../../../components/Button';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import styles from './Products.module.css';

const Products = () => {
    const [formOpen, setFormOpen] = useState(false);
    const [selectedProductToEdit, setSelectedProductToEdit] = useState(null);
    const openAddProductForm = () => setFormOpen(!formOpen);
    return (
        <div className={styles.products}>
            <div className={styles.utility}>
                {formOpen ? (
                    <ProductForm
                        setFormOpen={setFormOpen}
                        selectedProductToEdit={selectedProductToEdit}
                        setSelectedProductToEdit={setSelectedProductToEdit}
                    />
                ) : (
                    <Button fn={openAddProductForm}>Add Product</Button>
                )}
            </div>

            {/* // table */}
            <ProductList
                setSelectedProductToEdit={setSelectedProductToEdit}
                setFormOpen={setFormOpen}
            />
        </div>
    );
};

export default Products;
