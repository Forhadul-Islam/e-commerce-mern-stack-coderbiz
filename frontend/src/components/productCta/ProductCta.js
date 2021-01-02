import React from 'react';

const ProductCta = ({title, description}) => {

    return (
        <div className="product-cta">
            <div className="product-cta__left">
                <div className="product-cta__left--title">
                    {title}
                </div>
                <div className="product-cta__left--description">
                    {description}
                </div>
                <div className="product-cta__left--instructor">
                <strong>Instructor: </strong> Mizanur Rahaman
                </div>
            </div>
            <div className="product-cta__right">
                
            </div>
            
        </div>
    )
}

export default ProductCta
