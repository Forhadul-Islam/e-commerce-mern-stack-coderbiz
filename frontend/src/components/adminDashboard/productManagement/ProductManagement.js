import React from 'react';
import { Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import SingleProduct from './SingleProduct';

const ProductManagement = () => {
    const {products} = useSelector(state => state.productReducer)

    return (
        <div className="product-management">
            <div className="product-management__title">
            <Badge variant="dark">All Products- {products?.length}</Badge>
            </div>
            <div className="product-management__container">
                {
                    products?.map(product =>(
                            <SingleProduct 
                                key = {product.id}
                                product = {product}
                            />
                        
                    ))
                }
                
            </div>
        </div>
    )
}

export default ProductManagement;
