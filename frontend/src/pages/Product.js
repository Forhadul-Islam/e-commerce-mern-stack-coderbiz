import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCta from '../components/productCta/ProductCta';
import ProductFeature from '../components/productCta/ProductFeature';
import ProductFixed from '../components/productCta/ProductFixed';
import { addToCartAction } from '../redux/actions/cartActions';
import { loadSingleProduct } from '../redux/actions/productActions';
import Loading from '../util/Loading';


const Product = () => {
    const {courseId} = useParams()
    const dispatch = useDispatch();
    const {singleProduct, isLoading} = useSelector(state => state.productReducer)
    const {cart} = useSelector(state => state.cartReducer)
    const item = {
        id: courseId,
        title:singleProduct.title, 
        image:singleProduct.image,
        price: singleProduct.price, 
        sale:singleProduct.sale
    }
    
    const addToCart = () =>{
        dispatch(addToCartAction(cart, item))
    }
    
    useEffect(async ()=>{
        dispatch(loadSingleProduct(courseId));

    }, [])
    return (
        <>
        {
            !isLoading ? <div className="product">
                <ProductCta 
                    title={singleProduct?.title}
                    description={singleProduct?.description}
                />
                <ProductFeature features ={singleProduct?.features} />
                <ProductFixed
                    addToCart={addToCart}
                    image={singleProduct?.image}
                    price={singleProduct?.price}
                    sale={singleProduct?.sale}
                />
        </div>
        : <Loading />
        }
        </>
    )
}

export default Product
