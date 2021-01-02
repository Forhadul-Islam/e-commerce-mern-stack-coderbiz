import React, { useState } from 'react';
import DeleteProduct from './DeleteProduct';
import UpdateProduct from './UpdateProduct';

const SingleProduct = ({product}) => {
    const {title, image, instructor, price, sale, createdAt, updatedAt, _id} = product;

    const [showUpdateForm, setShowUpdateForm] = useState(false)


    return (
        <div className="product-management__container--item">
            <img className="product-management__container--item-image"
                src={image} alt="product" />
            <div className="product-management__container--item-info" >
                <div className="product-management__container--item-info-title">
                    {title}
                </div>
                <div className="product-management__container--item-info--author">
                    <strong>Instructor:</strong> {instructor}
                </div>
                <div className="product-management__container--item-info--price">
                    <strong>Price:</strong> ${price}
                </div>
                <div className="product-management__container--item-info--sale">
                    <strong>Discount</strong> {sale? `${Math.round(sale*100)}%` : `No Discount`}
                </div>
                <div className="product-management__container--item-info--price">
                    <strong>CurrentPrice:</strong> ${sale? price - price * sale : price}
                </div>
                <div className="product-management__container--item-info--sale">
                    <strong>Created at: </strong>{createdAt}
                </div>
                <div className="product-management__container--item-info--sale">
                    <strong>LastUpdated: </strong> {updatedAt}
                </div>
            </div>
            {/* <div className="product-management__container--item-operation" > */}
                <UpdateProduct
                    id={_id}
                    type="primary"
                    className="product-management__container--item-operation--update"
                />
                <DeleteProduct 
                    id ={_id}
                />
        </div>
    )
}

export default SingleProduct
