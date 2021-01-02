import React from 'react'
import ProductForm from './ProductForm'

const NewProduct = () => {
    return (
        <div className="new-product">
            <div className="new-product__title">
                Create a new product! 🚀
            </div>
            <div className="new-product__container">
                <ProductForm />
            </div>
        </div>
    )
}

export default NewProduct
