import React from 'react';
import useScrollTracker from '../customHooks/useScrollTracker';

const ProductFixed = ({image, price, sale, addToCart}) => {
    const {tooClose} = useScrollTracker(80)

    let offsetClass = tooClose ? 'product-cta__buynow product-cta__buynow--offset' : 'product-cta__buynow';
    return (
        <div className={offsetClass}>
             <img className="product-cta__buynow--top" src={image} alt="" />
            
            <div className="product-cta__buynow--bottom">
                    {
                        sale ?
                        <div className="product-cta__buynow--bottom-price">
                        <div className="product-cta__buynow--bottom-price-previous">
                            <span>$</span> {price}
                        </div>
                        <div className="product-cta__buynow--bottom-price-discount">
                            <span>Sale $</span>{Math.floor(price - price * sale)}
                        </div>
                    </div>
                    : <div className="product-cta__buynow--bottom-price">
                    {/* <div className="product-cta__buynow--bottom-price-previous">
                        <span>$</span>
                    </div> */}
                    <div className="product-cta__buynow--bottom-price-discount">
                        <span> $</span>{price}
                    </div>
                </div>
                    }
                    <input 
                        onClick={addToCart}
                        className="product-cta__buynow--bottom-addToCart"
                        type="submit"
                        value="Add to cart"
                    />
                    <div className="product-cta__buynow--bottom-points">
                        <h6 className="product-cta__buynow--bottom-points-title">This course includes:</h6>
                        <li className="product-cta__buynow--bottom-points-item">
                            <strong>Certification: </strong>yes
                        </li>
                        <li className="product-cta__buynow--bottom-points-item">
                            <strong>Access: </strong>lifetime
                        </li>
                        <li className="product-cta__buynow--bottom-points-item">
                            <strong>Length: </strong>20 weeks
                        </li>
                    </div>
            </div>

            
        </div>
    )
}

export default ProductFixed
