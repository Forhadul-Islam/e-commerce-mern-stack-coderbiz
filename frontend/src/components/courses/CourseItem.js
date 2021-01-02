import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addToCartAction } from '../../redux/actions/cartActions';
import { loadSingleProduct } from '../../redux/actions/productActions';


const CourseItem = ({ id, title, image, description, price, sale}) => {
    const history = useHistory()
    const dispatch = useDispatch();
    const {cart} = useSelector(state => state.cartReducer)
    const item = {
        id,
        title, 
        image,
        price, 
        sale
    }
    
    const addToCart = () =>{
        dispatch(addToCartAction(cart, item))
    }

    const handleViewProduct = (id) => {
        history.push(`/courses/${id}`)
        dispatch(loadSingleProduct(id))
        
    }
    return (
        <div className="course-item" >
            <img className="course-item__image" src={image} alt={title} />
            <div className="course-item__content">
                <div onClick={()=>{handleViewProduct(id)}} className="course-item__content--title">
                    {title}
                </div>
                <div className="course-item__content--description">
                    {description}
                </div>
                {
                sale? <div className="course-item__content--sale">
                    <div className="course-item__content--sale-previous">
                    <strong>$</strong>{price}
                    </div>
                    <div className="course-item__content--sale-current">
                       <span className="course-item__content--sale-tag">Sale: </span> <strong>$</strong>{Math.round(price - price * sale)}
                    </div>
                </div>:
                <div className="course-item__content--price">
                <strong>$</strong>{price}
            </div>
                }
            </div>
            <input 
                    onClick={()=> addToCart()}
                    className="course-item__button" 
                    type="button" 
                    name="course" 
                    value="Buy now" 
                />
        </div>
    )
}

export default CourseItem
