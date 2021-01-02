import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';


const ProductFeature = ({features}) => {
    return (
        <div className="product-features">
           
            <div className="product-features__title">
                Topics will be covered:
            </div>
            {features?.map((el, i) =>(
                <div key={i} className="product-features__list">
                
                <p className="product-features__list--item"><AiOutlineCheckCircle className="product-features__list--item-icon" />{el} </p>
            </div>
                ))}
        </div>
    )
}

export default ProductFeature
